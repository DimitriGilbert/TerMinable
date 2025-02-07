"use client";
import { useTheme } from "~/components/theme-provider";
import TerminableExample from "~/components/TerminableExample";
import { toast } from "sonner";
import { useInView } from "react-intersection-observer";
import { TerminableExampleProps } from "~/components/TerminableExample";

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
    <div className={`min-h-screen py-12`}>
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">
            <span className="text-green-400">Terminable</span> Component
            Documentation
          </h1>
          <p className="text-gray-400">
            Simulate terminal interactions in your React applications
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            The <code className="text-yellow-300">Terminable</code> component
            provides a way to simulate a terminal interface within your React
            application. It's designed to display a sequence of commands and
            their outputs in an animated, terminal-like fashion, enhancing user
            experience and providing a dynamic way to present information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">Usage</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            To integrate the <code className="text-yellow-300">Terminable</code>{" "}
            component into your project, import it and pass an array of command
            objects to the <code className="text-yellow-300">commands</code>{" "}
            prop.
          </p>
          <div className="overflow-x-auto rounded-md bg-gray-800 p-4">
            <pre className="text-sm text-gray-100">
              <code>
                {`import Terminable from "~registry/components/ui/Terminable";

const MyComponent = () => {
  const commands = [
    {
      prompt: "echo Hello, World!",
      output: "Hello, World!",
    },
  ];

  return <Terminable commands={commands} />;
};

export default MyComponent;
`}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">Props</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">commands</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>CommandEntry[]</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">-</td>
                  <td className="px-6 py-4 text-gray-300">
                    An array of command objects to be executed in the terminal.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">defaultTypingSpeed</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>50</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Default typing speed in milliseconds per character.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">defaultTypingRandom</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>30</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Randomness factor for typing speed, as a percentage.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">defaultOutputSpeed</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>30</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Default delay before displaying each line of output, in
                    milliseconds.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">autoStart</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>boolean</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>true</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Whether the terminal should start executing commands
                    automatically.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">width</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"w-full max-w-[800px]"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Tailwind CSS width class for the terminal.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">height</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"min-h-[300px] max-h-[500px]"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Tailwind CSS height class for the terminal.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">termPrompt</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"$ "</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    The terminal prompt string.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">startLine</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"__________"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    The initial line displayed in the terminal.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">backgroundColor</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"bg-[#1a1a1a]"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Tailwind CSS background color class for the terminal.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">promptColor</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"text-[#00ff00]"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Tailwind CSS text color class for the terminal prompt.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">outputColor</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>"text-white"</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Tailwind CSS text color class for the terminal output.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">title</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>""</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Title displayed in the terminal window.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">commandDelay</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>1000</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Delay between each command execution, in milliseconds.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">allowCopy</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>boolean</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>true</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Whether to allow copying the command to the clipboard.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">start</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>boolean</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>true</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Whether the terminal should start automatically.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">
            CommandEntry Object Structure
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            Each command object in the{" "}
            <code className="text-yellow-300">commands</code> array defines a
            command to be executed in the terminal. Here are the properties you
            can use:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">prompt</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    The command prompt string or ReactNode to be displayed.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">output</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>
                      string | OutputContent | Array&lt;string |
                      OutputContent&gt;
                    </code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    The output of the command. Can be a string, OutputContent
                    object, or an array of both.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">typingSpeed</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Typing speed for this command, overriding the default.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">typingRandom</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Randomness factor for typing speed, overriding the default.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">delay</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Delay before executing this command, overriding the global
                    delay.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">outputDelay</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Delay before displaying the output of this command.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">onDone</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>() =&gt; void</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Callback function executed when the command is finished.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">onCopy</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>() =&gt; void</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Callback function executed when the command is copied.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">onBeforeOutput</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>() =&gt; void</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Callback function executed before the output is displayed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">
            OutputContent Object Structure
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            The <code className="text-yellow-300">OutputContent</code> object
            allows you to specify complex output scenarios with placeholders and
            delays.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">delay</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>number</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Delay before the content is displayed, in milliseconds.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">placeholder</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Placeholder content to display while waiting for the delay.
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code className="text-yellow-300">content</code>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <code>string | ReactNode</code>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    The actual content to display after the delay.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-green-400">
            Examples
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            Explore these examples to understand how to use the{" "}
            <code className="text-yellow-300">Terminable</code> component in
            different scenarios.
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
        </section>
      </div>
    </div>
  );
}
