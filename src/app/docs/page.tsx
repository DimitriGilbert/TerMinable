"use client";
import { DocsSection } from "~/components/docs/DocsSection";
import { DocsCodeBlock } from "~/components/docs/DocsCodeBlock";
import { DocsTable } from "~/components/docs/DocsTable";
import TerminableExample from "~/components/TerminableExample";
import { toast } from "sonner";
import { useInView } from "react-intersection-observer";
import { type TerminableExampleProps } from "~/components/TerminableExample";
import { GlowLink } from "~/components/ui/glow-link";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { FaCopy } from "react-icons/fa";
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
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            <span className="text-primary">Terminable</span> Component
            Documentation
          </h1>
          <p className="text-foreground/80">
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
            It is build using{" "}
            <GlowLink
              href="https://ui.shadcn.com/"
              target="_blank"
              color="rgba(173,251,28,0.8)"
              size="12px"
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
            cmd={`shadcn/ui@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json`}
          />
        </DocsSection>

        <DocsSection title="Usage">
          <p className="mb-4">
            To integrate the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-primary">
              Terminable
            </code>{" "}
            component into your project...
          </p>
          <DocsCodeBlock>
            {`import Terminable from "~registry/components/ui/Terminable";`}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection title="Props">
          <DocsTable
            headers={["Name", "Type", "Default", "Description"]}
            rows={[
              [
                <code key="commands" className="text-primary">
                  commands
                </code>,
                <code key="commands0">CommandEntry[]</code>,
                "-",
                "An array of command objects to be executed in the terminal.",
              ],
              // Add other rows here
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
                `<code className="text-primary">prompt</code>`,
                `<code>string | ReactNode</code>`,
                "The command prompt string or ReactNode to be displayed.",
              ],
              [
                `<code className="text-primary">output</code>`,
                ` <code>
                  string | OutputContent | Array&lt;string |
                  OutputContent&gt;
                </code>`,
                `The output of the command. Can be a string, OutputContent
                object, or an array of both."`,
              ],
              [
                `<code className="text-primary">typingSpeed</code>`,
                `<code>number</code>`,
                `Typing speed for this command, overriding the default.`,
              ],
              [
                `<code className="text-primary">typingRandom</code>`,
                `<code>number</code>`,
                `Randomness factor for typing speed, overriding the default.`,
              ],
              [
                `<code className="text-primary">delay</code>`,
                `<code>number</code>`,
                `Delay before executing this command, overriding the global
                delay.`,
              ],
              [
                `<code className="text-primary">outputDelay</code>`,
                `<code>number</code>`,
                `Delay before displaying the output of this command.`,
              ],
              [
                `<code className="text-primary">onDone</code>`,
                `<code>() =&gt; void</code>`,
                `Callback function executed when the command is finished.`,
              ],
              [
                `<code className="text-primary">onCopy</code>`,
                `<code>() =&gt; void</code>`,
                `Callback function executed when the command is copied.`,
              ],
              [
                `<code className="text-primary">onBeforeOutput</code>`,
                `<code>() =&gt; void</code>`,
                `Callback function executed before the output is displayed.`,
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
                    <span style={{ color: "yellow" }}>Custom prompt</span>
                  ),
                  output: <span style={{ color: "cyan" }}>Custom output</span>,
                },
                {
                  prompt: "Multiple React nodes",
                  output: [
                    <div style={{ color: "red" }} key="1">
                      First node
                    </div>,
                    <div style={{ color: "blue" }} key="2">
                      Second node
                    </div>,
                  ],
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: <span style={{ color: "yellow" }}>Custom prompt</span>,
      output: <span style={{ color: "cyan" }}>Custom output</span>
    },
    {
      prompt: "Multiple React nodes",
      output: [
        <div style={{ color: "red" }} key="1">First node</div>,
        <div style={{ color: "blue" }} key="2">Second node</div>
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
                  output: "This will trigger a toast",
                  onDone: () => toast.success("Command finished!"),
                },
                {
                  prompt: "onCopy callback",
                  output: "Click to copy this command",
                  onCopy: () => toast.info("Command copied!"),
                },
                {
                  prompt: "onBeforeOutput callback",
                  output: "This shows a toast before output",
                  onBeforeOutput: () => toast.warning("About to show output!"),
                },
              ]}
              codeString={`
<Terminable
  commands={[
    {
      prompt: "onDone callback",
      output: "This will trigger a toast",
      onDone: () => toast.success("Command finished!")
    },
    {
      prompt: "onCopy callback",
      output: "Click to copy this command",
      onCopy: () => toast.info("Command copied!")
    },
    {
      prompt: "onBeforeOutput callback",
      output: "This shows a toast before output",
      onBeforeOutput: () => toast.warning("About to show output!")
    }
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
                  onDone: () => toast.success("Diagnostics complete!"),
                },
                {
                  prompt: "System ready",
                  output: (
                    <span style={{ color: "green" }}>
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
      onDone: () => toast.success("Diagnostics complete!")
    },
    {
      prompt: "System ready",
      output: <span style={{ color: "green" }}>All systems operational</span>
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
