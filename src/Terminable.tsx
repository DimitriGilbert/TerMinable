import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "./components/ui/menubar";
import { toast } from "sonner";

type OutputContent = {
  delay?: number;
  placeholder?: string | React.ReactNode;
  content: string | React.ReactNode;
};

interface DisplayEntry {
  type: "command" | "output";
  content: string | React.ReactNode;
  done?: boolean;
}

interface TerminalSimulatorProps {
  commands: {
    prompt: string | React.ReactNode;
    output?: string | string[] | OutputContent | OutputContent[];
    typingSpeed?: number;
    typingRandom?: number;
    outputSpeeds?: number[];
  }[];
  defaultTypingSpeed?: number;
  defaultTypingRandom?: number;
  defaultOutputSpeed?: number;
  autoStart?: boolean;
  width?: string; // Tailwind width class
  height?: string; // Tailwind height class
  termPrompt?: string | React.ReactNode;
  startLine?: string | React.ReactNode;
  backgroundColor?: string; // Tailwind or custom color
  promptColor?: string; // Tailwind or custom color
  outputColor?: string; // Tailwind or custom color
  greenMenu?: React.ReactNode;
  yellowMenu?: React.ReactNode;
  redMenu?: React.ReactNode;
  title?: string | React.ReactNode;
  commandDelay?: number; // New prop for delay between commands
  allowCopy?: boolean; // New prop to control copy functionality
}

export default function Terminable({
  commands = [],
  defaultTypingSpeed = 50,
  defaultOutputSpeed = 30,
  autoStart = true,
  width = "w-full max-w-[800px]", // Default width
  height = "min-h-[300px] max-h-[500px]", // Default height
  termPrompt = "$ ",
  startLine = "__________", // Default start line
  backgroundColor = "bg-[#1a1a1a]", // Default dark background
  promptColor = "text-[#00ff00]", // Default green prompt
  outputColor = "text-white", // Default white output
  greenMenu,
  yellowMenu,
  redMenu,
  title,
  commandDelay = 1000, // Default delay of 1000ms (1 second)
  allowCopy = true, // Default allow copy
}: TerminalSimulatorProps) {
  const [display, setDisplay] = useState<DisplayEntry[]>([
    { type: "output", content: startLine },
  ]);
  const processingRef = useRef(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const userScrolledRef = useRef(false);
  const commandIndexRef = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    if (terminalRef.current && !userScrolledRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [display]);

  const handleScroll = useCallback(() => {
    if (!terminalRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
    const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;

    if (!isScrolledToBottom) {
      userScrolledRef.current = true;
    } else {
      userScrolledRef.current = false;
    }
  }, []);

  const processCommand = useCallback(
    async (cmd: (typeof commands)[number] | undefined) => {
      if (!cmd) return;

      // Add delay before next command (except first)
      if (commandIndexRef.current > 0) {
        await new Promise((resolve) => setTimeout(resolve, commandDelay));
      }

      // Add the command prompt line
      setDisplay((prev) => [
        ...prev,
        { type: "command", content: "", done: false },
      ]);

      // If prompt is a ReactNode, add it directly without typing simulation
      if (typeof cmd.prompt !== "string") {
        setDisplay((prev) => {
          const lastEntry = prev[prev.length - 1];
          if (lastEntry?.type === "command") {
            return [
              ...prev.slice(0, -1),
              {
                ...lastEntry,
                content: cmd.prompt,
                done: true,
                type: "command",
              },
            ];
          }
          return prev;
        });
      } else {
        // Type the command
        const trimmedPrompt = cmd.prompt.trim();
        let currentContent = "";

        for (const char of trimmedPrompt) {
          currentContent += char;
          setDisplay((prev) => {
            const lastEntry = prev[prev.length - 1];
            if (lastEntry?.type === "command") {
              return [
                ...prev.slice(0, -1),
                {
                  ...lastEntry,
                  content: currentContent,
                  type: "command",
                },
              ];
            }
            return prev;
          });

          const baseSpeed = cmd.typingSpeed ?? defaultTypingSpeed;
          const randomFactor = cmd.typingRandom ?? 0;
          const randomVariation =
            Math.random() * (baseSpeed * (randomFactor / 100));
          const delay =
            baseSpeed +
            (Math.random() > 0.5 ? randomVariation : -randomVariation);

          await new Promise((resolve) =>
            setTimeout(resolve, Math.max(10, delay)),
          );
        }
      }

      // Mark the command as done
      setDisplay((prev) => {
        const lastEntry = prev[prev.length - 1];
        if (lastEntry?.type === "command") {
          return [
            ...prev.slice(0, -1),
            {
              ...lastEntry,
              done: true,
              type: "command",
            },
          ];
        }
        return prev;
      });

      // Process outputs
      if (cmd.output) {
        const outputs = Array.isArray(cmd.output) ? cmd.output : [cmd.output];
        for (const line of outputs) {
          if (line) {
            await new Promise((resolve) =>
              setTimeout(resolve, defaultOutputSpeed),
            );

            if (typeof line === "string") {
              setDisplay((prev) => [
                ...prev,
                { type: "output", content: line },
              ]);
            } else {
              // Add initial output entry with placeholder if it exists
              setDisplay((prev) => [
                ...prev,
                {
                  type: "output",
                  content: line.placeholder ?? "",
                },
              ]);

              // If there's a delay, wait before showing the final content
              if (line.delay) {
                await new Promise((resolve) => setTimeout(resolve, line.delay));
              }

              // Update output entry with final content
              setDisplay((prev) => {
                const newDisplay = [...prev];
                const lastEntry = newDisplay[newDisplay.length - 1];
                if (lastEntry?.type === "output") {
                  lastEntry.content = line.content;
                }
                return newDisplay;
              });
            }
          }
        }
      }

      commandIndexRef.current += 1;
    },
    [defaultOutputSpeed, defaultTypingSpeed, commandDelay],
  );

  useEffect(() => {
    if (!autoStart || processingRef.current) return;

    const processCommands = async () => {
      processingRef.current = true;
      try {
        while (commandIndexRef.current < commands.length) {
          await processCommand(commands[commandIndexRef.current]);
        }
      } catch (error) {
        console.error('Error processing commands:', error);
        toast.error(`Error processing commands: ${error instanceof Error ? error.message : 'Unknown error'}`, { duration: 2000 }); // Display error to user
      } finally {
        processingRef.current = false;
      }
    };

    void processCommands();
  }, [commands, autoStart, processCommand]);

  return (
    <div
      className={`mx-auto my-1 ${width} overflow-hidden rounded-lg ${backgroundColor} font-mono`}
    >
      <div className="flex items-center bg-[#333] px-2">
        <Menubar className="border-none bg-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="p-0 hover:bg-transparent">
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </MenubarTrigger>
            <MenubarContent>{greenMenu && greenMenu}</MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="p-0 hover:bg-transparent">
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            </MenubarTrigger>
            <MenubarContent>{yellowMenu && yellowMenu}</MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="p-0 hover:bg-transparent">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            </MenubarTrigger>
            <MenubarContent>{redMenu && redMenu}</MenubarContent>
          </MenubarMenu>{" "}
        </Menubar>
        <div className="flex-1 text-center text-sm">
          {title}
        </div>
      </div>
      <div
        ref={terminalRef}
        onScroll={handleScroll}
        className={`${height} overflow-y-auto p-5 ${promptColor} whitespace-pre-wrap break-words`}
        role="log"
        aria-live="polite"
      >
        {display.map((entry, index) => (
          <div key={index} className="my-1">
            {entry.type === "command" && (
              <div className="flex">
                <span className={`mr-2 ${promptColor}`}>{termPrompt}</span>
                <span
                  className={`${!entry.done ? "animate-blink border-r-2 border-[#00ff00]" : ""} cursor-pointer break-all rounded px-1 hover:bg-[#333]`}
                  onClick={() => {
                    if (allowCopy && entry.done && typeof entry.content === "string") {
                      navigator.clipboard.writeText(entry.content).then(() => {
                        toast.success("Copied to clipboard", {
                          duration: 1000,
                        });
                      }).catch((error) => {
                        console.error("Failed to copy to clipboard:", error);
                        toast.error("Failed to copy to clipboard", {
                          duration: 1000,
                        });
                      });
                    }
                  }}
                >
                  {entry.content}
                </span>
              </div>
            )}
            {entry.type === "output" && (
              <div
                className={`ml-6 whitespace-pre-wrap break-all ${outputColor}`}
              >
                {entry.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 