"use client";
import { DocsSection } from "~/components/docs/DocsSection";
import { DocsCodeBlock } from "~/components/docs/DocsCodeBlock";
import { DocsTable } from "~/components/docs/DocsTable";
import TerminableExample from "~/components/TerminableExample";
import { useInView } from "react-intersection-observer";
import { type TerminableExampleProps } from "~/components/TerminableExample";
import { GlowLink } from "~/components/ui/glow-link";
import Link from "next/link";
import { PkgMngCmdCopy } from "~/components/PkgMngCmdCopy";

const LazyTerminableExample = (props: TerminableExampleProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="h-full">
      <TerminableExample {...props} start={inView} />
    </div>
  );
};

export default function Docs() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            <span className="text-primary">Terminable</span> Component
            Documentation
          </h1>
          <p className="text-muted-foreground">
            Simulate terminal interactions in your documentation
          </p>
        </header>

        <DocsSection title="Introduction">
          <p className="mb-4">
            Wether to show an example of your CLI that is not video, or just to
            look cool (yes, terminals are cool ! they. are.){" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            is for you.
          </p>
          <p className="mb-4">
            It is built using{" "}
            <GlowLink
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="rgba(173,251,28,0.8)"
              size={12}
              duration={0.5}
              scale={1.1}
              className="font-semibold drop-shadow-[0_0_8px_rgba(173,251,28,0.8)]"
              glowClassName="rounded-md px-1.5 py-0.5 bg-primary/10 dark:bg-primary-foreground/10"
            >
              Shadcn/ui
            </GlowLink>{" "}
            components, and you can (only) install it using my custom{" "}
            <Link
              href="https://ui.shadcn.com/docs/installation/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-muted px-1 py-0.5 font-mono text-primary"
            >
              shadcn/ui registry
            </Link>
          </p>
        </DocsSection>

        <DocsSection title="Installation">
          <p className="mb-4">
            To install the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            component, you can use the following command:
          </p>
          <PkgMngCmdCopy
            className="w-full max-w-3xl"
            buttonClassName="px-4 py-2"
            preClassName="w-full"
            cmd={`shadcn@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json`}
          />
        </DocsSection>

        <DocsSection title="Usage">
          <p className="mb-4">
            To integrate the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            component into your project:
          </p>
          <DocsCodeBlock>
            {`import Terminable from "@/components/ui/Terminable";`}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection title="Props">
          <p className="mb-4">
            The{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            component accepts the following props:
          </p>
          <DocsTable
            headers={["Name", "Type", "Default", "Description"]}
            rows={[
              [
                <code key="commands" className="text-primary">
                  commands
                </code>,
                <code key="commands0">CommandEntry[]</code>,
                <code key="commands1">required</code>,
                "An array of command objects to be executed in the terminal.",
              ],
              [
                <code key="titleBarVariant" className="text-primary">
                  titleBarVariant
                </code>,
                <code key="titleBarVariant0">
                  &quot;macos&quot; | &quot;windows&quot; | &quot;linux&quot; |
                  &quot;minimal&quot; | &quot;none&quot;
                </code>,
                <code key="titleBarVariant1">&quot;macos&quot;</code>,
                "Visual style of the terminal title bar.",
              ],
              [
                <code key="title" className="text-primary">
                  title
                </code>,
                <code key="title0">string | ReactNode</code>,
                <code key="title1">-</code>,
                "Title displayed in the title bar.",
              ],
              [
                <code key="defaultTypingSpeed" className="text-primary">
                  defaultTypingSpeed
                </code>,
                <code key="defaultTypingSpeed0">number</code>,
                <code key="defaultTypingSpeed1">50</code>,
                "Default typing speed in ms per character.",
              ],
              [
                <code key="defaultTypingRandom" className="text-primary">
                  defaultTypingRandom
                </code>,
                <code key="defaultTypingRandom0">number</code>,
                <code key="defaultTypingRandom1">0</code>,
                "Randomness factor for typing speed (0–100).",
              ],
              [
                <code key="defaultOutputSpeed" className="text-primary">
                  defaultOutputSpeed
                </code>,
                <code key="defaultOutputSpeed0">number</code>,
                <code key="defaultOutputSpeed1">30</code>,
                "Delay between output lines in ms.",
              ],
              [
                <code key="width" className="text-primary">
                  width
                </code>,
                <code key="width0">string</code>,
                <code key="width1">&quot;w-full max-w-[800px]&quot;</code>,
                "Tailwind width classes for the terminal container.",
              ],
              [
                <code key="height" className="text-primary">
                  height
                </code>,
                <code key="height0">string</code>,
                <code key="height1">
                  &quot;min-h-[300px] max-h-[500px]&quot;
                </code>,
                "Tailwind height classes for the terminal body.",
              ],
              [
                <code key="termPrompt" className="text-primary">
                  termPrompt
                </code>,
                <code key="termPrompt0">string | ReactNode</code>,
                <code key="termPrompt1">&quot;$ &quot;</code>,
                "Prompt symbol shown before each command.",
              ],
              [
                <code key="startLine" className="text-primary">
                  startLine
                </code>,
                <code key="startLine0">string | ReactNode</code>,
                <code key="startLine1">&quot;&quot;</code>,
                "Initial content displayed before commands start.",
              ],
              [
                <code key="backgroundColor" className="text-primary">
                  backgroundColor
                </code>,
                <code key="backgroundColor0">string</code>,
                <em key="backgroundColor1">CSS var</em>,
                "CSS color value for the terminal background. Overrides the internal CSS variable.",
              ],
              [
                <code key="promptColor" className="text-primary">
                  promptColor
                </code>,
                <code key="promptColor0">string</code>,
                <em key="promptColor1">CSS var</em>,
                "CSS color value for the prompt text. Overrides the internal CSS variable.",
              ],
              [
                <code key="outputColor" className="text-primary">
                  outputColor
                </code>,
                <code key="outputColor0">string</code>,
                <em key="outputColor1">CSS var</em>,
                "CSS color value for the output text. Overrides the internal CSS variable.",
              ],
              [
                <code key="commandDelay" className="text-primary">
                  commandDelay
                </code>,
                <code key="commandDelay0">number</code>,
                <code key="commandDelay1">1000</code>,
                "Default delay between commands in ms.",
              ],
              [
                <code key="allowCopy" className="text-primary">
                  allowCopy
                </code>,
                <code key="allowCopy0">boolean</code>,
                <code key="allowCopy1">true</code>,
                "Whether completed commands can be clicked to copy.",
              ],
              [
                <code key="start" className="text-primary">
                  start
                </code>,
                <code key="start0">boolean</code>,
                <code key="start1">true</code>,
                "Start processing commands automatically on mount.",
              ],
              [
                <code key="onError" className="text-primary">
                  onError
                </code>,
                <code key="onError0">(error: Error) =&gt; void</code>,
                <code key="onError1">-</code>,
                "Callback fired when an error occurs during command processing.",
              ],
              [
                <code key="onCopySuccess" className="text-primary">
                  onCopySuccess
                </code>,
                <code key="onCopySuccess0">(text: string) =&gt; void</code>,
                <code key="onCopySuccess1">-</code>,
                "Callback fired when a command is successfully copied to clipboard.",
              ],
              [
                <code key="onCopyError" className="text-primary">
                  onCopyError
                </code>,
                <code key="onCopyError0">(error: Error) =&gt; void</code>,
                <code key="onCopyError1">-</code>,
                "Callback fired when copying to clipboard fails.",
              ],
            ]}
          />
        </DocsSection>

        <DocsSection title="CommandEntry Object Structure">
          <p className="mb-4">
            Each command object in the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              commands
            </code>{" "}
            array defines a command to be executed in the terminal. Here are the
            properties you can use:
          </p>
          <DocsTable
            headers={["Name", "Type", "Description"]}
            rows={[
              [
                <code key="prompt" className="text-primary">
                  prompt
                </code>,
                <code key="prompt0">
                  string | ReactNode | Array&lt;string | ReactNode&gt;
                </code>,
                "The command prompt string or ReactNode to be typed.",
              ],
              [
                <code key="output" className="text-primary">
                  output
                </code>,
                <code key="output0">
                  string | OutputContent | ReactNode | Array&lt;string |
                  OutputContent | ReactNode&gt;
                </code>,
                "The output of the command. Can be a string, OutputContent object, ReactNode, or an array of these.",
              ],
              [
                <code key="typingSpeed" className="text-primary">
                  typingSpeed
                </code>,
                <code key="typingSpeed0">number</code>,
                "Typing speed for this command in ms, overriding the default.",
              ],
              [
                <code key="typingRandom" className="text-primary">
                  typingRandom
                </code>,
                <code key="typingRandom0">number</code>,
                "Randomness factor for typing speed (0–100), overriding the default.",
              ],
              [
                <code key="delay" className="text-primary">
                  delay
                </code>,
                <code key="delay0">number</code>,
                "Delay before executing this command in ms, overriding the global commandDelay.",
              ],
              [
                <code key="outputDelay" className="text-primary">
                  outputDelay
                </code>,
                <code key="outputDelay0">number</code>,
                "Delay before displaying the output of this command in ms.",
              ],
              [
                <code key="onDone" className="text-primary">
                  onDone
                </code>,
                <code key="onDone0">() =&gt; void</code>,
                "Callback function executed when the command is finished.",
              ],
              [
                <code key="onCopy" className="text-primary">
                  onCopy
                </code>,
                <code key="onCopy0">() =&gt; void</code>,
                "Callback function executed when the command text is copied.",
              ],
              [
                <code key="onBeforeOutput" className="text-primary">
                  onBeforeOutput
                </code>,
                <code key="onBeforeOutput0">() =&gt; void</code>,
                "Callback function executed before the output is displayed.",
              ],
            ]}
          />
        </DocsSection>

        <DocsSection title="OutputContent Object Structure">
          <p className="mb-4">
            The{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              OutputContent
            </code>{" "}
            object allows you to specify complex output scenarios with
            placeholders and delays.
          </p>
          <DocsTable
            headers={["Name", "Type", "Description"]}
            rows={[
              [
                <code key="delay" className="text-primary">
                  delay
                </code>,
                <code key="delay0">number</code>,
                "Delay before the content is displayed, in milliseconds.",
              ],
              [
                <code key="placeholder" className="text-primary">
                  placeholder
                </code>,
                <code key="placeholder0">string | ReactNode</code>,
                "Placeholder content to display while waiting for the delay.",
              ],
              [
                <code key="content" className="text-primary">
                  content
                </code>,
                <code key="content0">string | ReactNode</code>,
                "The actual content to display after the delay.",
              ],
            ]}
          />
        </DocsSection>

        <DocsSection title="CSS Custom Properties">
          <p className="mb-4">
            The component uses CSS custom properties for theming. These are
            defined with Tokyo Night defaults and can be overridden by passing
            the corresponding props or by setting the CSS variables in your
            stylesheet.
          </p>
          <DocsTable
            headers={["Variable", "Default", "Purpose"]}
            rows={[
              [
                <code key="0" className="text-primary">
                  --terminable-bg
                </code>,
                <code key="0v">#1a1b26</code>,
                "Terminal background color",
              ],
              [
                <code key="1" className="text-primary">
                  --terminable-prompt
                </code>,
                <code key="1v">#73daca</code>,
                "Prompt text color",
              ],
              [
                <code key="2" className="text-primary">
                  --terminable-output
                </code>,
                <code key="2v">#c0caf5</code>,
                "Output text color",
              ],
              [
                <code key="3" className="text-primary">
                  --terminable-titlebar-bg
                </code>,
                <code key="3v">#24283b</code>,
                "Title bar background",
              ],
              [
                <code key="4" className="text-primary">
                  --terminable-border
                </code>,
                <code key="4v">#3b4261</code>,
                "Terminal border color",
              ],
              [
                <code key="5" className="text-primary">
                  --terminable-title-color
                </code>,
                <code key="5v">#a9b1d6</code>,
                "Title text color",
              ],
              [
                <code key="6" className="text-primary">
                  --terminable-hover-bg
                </code>,
                <code key="6v">#292e42</code>,
                "Command hover background",
              ],
              [
                <code key="7" className="text-primary">
                  --terminable-cursor-color
                </code>,
                <code key="7v">#c0caf5</code>,
                "Blinking cursor color",
              ],
              [
                <code key="8" className="text-primary">
                  --terminable-dot-green
                </code>,
                <code key="8v">#27c93f</code>,
                "macOS title bar green dot",
              ],
              [
                <code key="9" className="text-primary">
                  --terminable-dot-yellow
                </code>,
                <code key="9v">#ffbd2e</code>,
                "macOS title bar yellow dot",
              ],
              [
                <code key="10" className="text-primary">
                  --terminable-dot-red
                </code>,
                <code key="10v">#ff5f56</code>,
                "macOS/Linux title bar red dot",
              ],
            ]}
          />
        </DocsSection>

        <DocsSection title="Title Bar Variants">
          <p className="mb-4">
            The{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              titleBarVariant
            </code>{" "}
            prop controls the visual style of the title bar. Choose from five
            options:
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <LazyTerminableExample
              title="macOS"
              titleBarVariant="macos"
              commands={[
                { prompt: "echo 'macOS style'", output: "macOS style" },
              ]}
              codeString={`
<Terminable
  titleBarVariant="macos"
  title="Terminal"
  commands={[
    { prompt: "echo 'macOS style'", output: "macOS style" }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Windows"
              titleBarVariant="windows"
              commands={[
                { prompt: "echo 'Windows style'", output: "Windows style" },
              ]}
              codeString={`
<Terminable
  titleBarVariant="windows"
  title="Command Prompt"
  commands={[
    { prompt: "echo 'Windows style'", output: "Windows style" }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Linux"
              titleBarVariant="linux"
              commands={[
                { prompt: "echo 'Linux style'", output: "Linux style" },
              ]}
              codeString={`
<Terminable
  titleBarVariant="linux"
  title="Bash"
  commands={[
    { prompt: "echo 'Linux style'", output: "Linux style" }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Minimal"
              titleBarVariant="minimal"
              commands={[
                { prompt: "echo 'Minimal style'", output: "Minimal style" },
              ]}
              codeString={`
<Terminable
  titleBarVariant="minimal"
  title="Terminal"
  commands={[
    { prompt: "echo 'Minimal style'", output: "Minimal style" }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="none"
              titleBarVariant="none"
              commands={[
                { prompt: "echo 'No title bar'", output: "No title bar" },
              ]}
              codeString={`
<Terminable
  titleBarVariant="none"
  commands={[
    { prompt: "echo 'No title bar'", output: "No title bar" }
  ]}
/>
              `}
            />
          </div>
        </DocsSection>

        <DocsSection title="Examples">
          <p className="mb-4">
            Explore these examples to understand how to use the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            component in different scenarios.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <LazyTerminableExample
              title="Basic Commands"
              commands={[
                { prompt: "echo Hello, World!", output: "Hello, World!" },
                { prompt: "whoami", output: "terminable-user" },
                { prompt: "date", output: new Date().toLocaleString() },
              ]}
              codeString={`
<Terminable
  commands={[
    { prompt: "echo Hello, World!", output: "Hello, World!" },
    { prompt: "whoami", output: "terminable-user" },
    { prompt: "date", output: new Date().toLocaleString() }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Delayed Outputs"
              commands={[
                {
                  prompt: "sleep 2",
                  output: {
                    placeholder: "Sleeping...",
                    delay: 2000,
                    content: "Done sleeping!",
                  },
                },
                {
                  prompt: "fetch data",
                  output: {
                    placeholder: "Loading...",
                    delay: 1500,
                    content: "Data loaded successfully!",
                  },
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "sleep 2",
      output: {
        placeholder: "Sleeping...",
        delay: 2000,
        content: "Done sleeping!"
      }
    },
    {
      prompt: "fetch data",
      output: {
        placeholder: "Loading...",
        delay: 1500,
        content: "Data loaded successfully!"
      }
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Multi-line Outputs"
              commands={[
                {
                  prompt: "ls -l",
                  output: [
                    "total 4.0K",
                    "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt",
                    "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt",
                  ],
                },
                {
                  prompt: "tree",
                  output: [
                    ".",
                    "├── src",
                    "│   ├── components",
                    "│   └── pages",
                    "└── package.json",
                  ],
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "ls -l",
      output: [
        "total 4.0K",
        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt",
        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt"
      ]
    },
    {
      prompt: "tree",
      output: [
        ".",
        "├── src",
        "│   ├── components",
        "│   └── pages",
        "└── package.json"
      ]
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Custom Typing Speeds"
              commands={[
                {
                  prompt: "Typing slowly...",
                  output: "This demonstrates slow typing",
                  typingSpeed: 150,
                },
                {
                  prompt: "Typing fast!",
                  output: "This demonstrates fast typing",
                  typingSpeed: 10,
                },
                {
                  prompt: "Random typing speed",
                  output: "This demonstrates random typing",
                  typingSpeed: 50,
                  typingRandom: 50,
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "Typing slowly...",
      output: "This demonstrates slow typing",
      typingSpeed: 150
    },
    {
      prompt: "Typing fast!",
      output: "This demonstrates fast typing",
      typingSpeed: 10
    },
    {
      prompt: "Random typing speed",
      output: "This demonstrates random typing",
      typingSpeed: 50,
      typingRandom: 50
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="React Node Content"
              commands={[
                {
                  prompt: (
                    <span style={{ color: "var(--terminable-prompt)" }}>Custom prompt</span>
                  ),
                  output: <span style={{ color: "var(--terminable-output)" }}>Custom output</span>,
                },
                {
                  prompt: "Multiple React nodes",
                  output: [
                    <div style={{ color: "var(--terminable-error)" }} key="1">
                      First node
                    </div>,
                    <div style={{ color: "var(--terminable-accent)" }} key="2">
                      Second node
                    </div>,
                  ],
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: <span style={{ color: "#e0af68" }}>Custom prompt</span>,
      output: <span style={{ color: "#7dcfff" }}>Custom output</span>
    },
    {
      prompt: "Multiple React nodes",
      output: [
        <div style={{ color: "#f7768e" }} key="1">First node</div>,
        <div style={{ color: "#7aa2f7" }} key="2">Second node</div>
      ]
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Callbacks"
              commands={[
                {
                  prompt: "onDone callback",
                  output: "This command triggers onDone when finished",
                  onDone: () => console.log("Done!"),
                },
                {
                  prompt: "onCopy callback",
                  output: "Click this command to copy it",
                  onCopy: () => console.log("Copied!"),
                },
                {
                  prompt: "onBeforeOutput callback",
                  output: {
                    content: "Output shown after onBeforeOutput fires",
                    delay: 1500,
                    placeholder: "Preparing output...",
                  },
                  onBeforeOutput: () => console.log("Before output!"),
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "onDone callback",
      output: "This command triggers onDone when finished",
      onDone: () => console.log("Done!")
    },
    {
      prompt: "onCopy callback",
      output: "Click this command to copy it",
      onCopy: () => console.log("Copied!")
    },
    {
      prompt: "onBeforeOutput callback",
      output: {
        content: "Output shown after onBeforeOutput fires",
        delay: 1500,
        placeholder: "Preparing output..."
      },
      onBeforeOutput: () => console.log("Before output!")
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Custom Colors"
              backgroundColor="#1e1e3f"
              promptColor="#f7768e"
              outputColor="#9ece6a"
              commands={[
                {
                  prompt: "echo 'custom palette'",
                  output: "Background, prompt and output colors are customizable",
                },
              ]}
              codeString={`
<Terminable
  backgroundColor="#1e1e3f"
  promptColor="#f7768e"
  outputColor="#9ece6a"
  commands={[
    { prompt: "echo 'custom palette'", output: "Custom colors!" }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Complex Outputs"
              commands={[
                {
                  prompt: "Complex output",
                  output: {
                    placeholder: "Processing...",
                    delay: 2000,
                    content: [
                      "Step 1: Complete",
                      "Step 2: Complete",
                      "Final result: Success!",
                    ],
                  },
                },
                {
                  prompt: "Nested complex output",
                  output: [
                    {
                      placeholder: "Loading part 1...",
                      delay: 1000,
                      content: "Part 1 complete",
                    },
                    {
                      placeholder: "Loading part 2...",
                      delay: 1500,
                      content: "Part 2 complete",
                    },
                  ],
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "Complex output",
      output: {
        placeholder: "Processing...",
        delay: 2000,
        content: [
          "Step 1: Complete",
          "Step 2: Complete",
          "Final result: Success!"
        ]
      }
    },
    {
      prompt: "Nested complex output",
      output: [
        {
          placeholder: "Loading part 1...",
          delay: 1000,
          content: "Part 1 complete"
        },
        {
          placeholder: "Loading part 2...",
          delay: 1500,
          content: "Part 2 complete"
        }
      ]
    }
  ]}
/>
              `}
            />

            <LazyTerminableExample
              title="Complete Workflow"
              commands={[
                {
                  prompt: "Starting system...",
                  output: "System initialized",
                  typingSpeed: 80,
                },
                {
                  prompt: "Loading modules...",
                  output: {
                    placeholder: "Loading...",
                    delay: 2000,
                    content: "Modules loaded",
                  },
                },
                {
                  prompt: "Running diagnostics...",
                  output: ["CPU: OK", "Memory: OK", "Storage: OK"],
                  onDone: () => {
                    return;
                  },
                },
                {
                  prompt: "System ready",
                  output: (
                    <span style={{ color: "var(--terminable-output)" }}>
                      All systems operational
                    </span>
                  ),
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "Starting system...",
      output: "System initialized",
      typingSpeed: 80
    },
    {
      prompt: "Loading modules...",
      output: {
        placeholder: "Loading...",
        delay: 2000,
        content: "Modules loaded"
      }
    },
    {
      prompt: "Running diagnostics...",
      output: [
        "CPU: OK",
        "Memory: OK",
        "Storage: OK"
      ],
      onDone: () => { /* handle completion */ }
    },
    {
      prompt: "System ready",
      output: <span style={{ color: "#9ece6a" }}>All systems operational</span>
    }
  ]}
/>
              `}
            />
          </div>
        </DocsSection>
      </div>
    </div>
  );
}
