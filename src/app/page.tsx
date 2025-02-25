"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import Terminable from "~registry/components/ui/Terminable";
import { GlowLink } from "~/components/ui/glow-link";
import { PkgMngCmdCopy } from "~/components/PkgMngCmdCopy";

export default function HomePage() {
  const [TermTitle, setTermTitle] = useState<string | React.ReactNode>(
    "Terminable",
  );
  const [TermBackground, setTermBackground] = useState("bg-[#1a1a1a]");
  const [TermPromptColor, setTermPromptColor] = useState("text-[#00ff00]");
  const [TermOutputColor, setTermOutputColor] = useState("text-white");
  const [TermPrompt, setTermPrompt] = useState("$ ");

  const commands = useMemo(
    () => [
      {
        prompt: "It all starts with a prompt",
        output: "... and an output, of course !",
      },
      {
        prompt: "You can also have a delay",
        output: "before showing the output",
        outputDelay: 1000,
      },
      {
        prompt: "You can have place holders during the wait",
        output: {
          content: "before showing the output",
          placeholder: "...",
          delay: 2000,
        },
      },
      {
        prompt: "you want multipart output ?",
        output: [
          { content: "you can have" },
          { content: "multiple outputs", delay: 1000, placeholder: "..." },
          {
            content: "for the same prompt",
            delay: 1000,
            placeholder: "...",
          },
        ],
      },
      {
        prompt: "you can even go bananas for the placeholder",
        output: {
          content: "literally bananas",
          delay: 3000,
          placeholder: (
            <img
              className="h-12 w-auto"
              src="https://gifdb.com/images/high/animated-energetic-dancing-banana-a0if4xeqivxs5jdy.gif"
              alt="logo"
            />
          ),
        },
      },
      {
        prompt: "you think it's cool ?",
        output: {
          placeholder: "yeah... me too !",
          content: (
            <div key="cool-term-content">
              I did it to use on many of my project docs, <br />
              <Link
                href="https://butt3r.dev"
                className="text-blue-500"
                target="_blank"
              >
                <Button className="bg-blue-500 text-white">Butt3r.dev</Button>
              </Link>
            </div>
          ),
          delay: 2000,
        },
      },
      {
        prompt: ["What ????", "What doo you mean you want more..."],
        output: {
          content: [
            "What more can I give you ?",
            <div className="text-blue-500" key="thinking-content">
              Thinking...
            </div>,
          ],
        },
      },
      {
        prompt: "Have you tried clicking on a command ?",
        output: {
          content: "If you did, you just copied the line :D",
          delay: 1000,
        },
      },
      {
        prompt: "You can also have a callback",
        output: "when the command is done",
        onDone: () => {
          toast.info("Check the title !", {
            duration: 5000,
          });
          setTermTitle("Terminable is awesome !");
        },
      },
      {
        prompt: "Don't like green on black",
        output: {
          content: [
            "but you can set the background, prompt and output colors\n",
            "as well as the prompt line start and the title",
          ],
          placeholder: "...I could not see why",
          delay: 2000,
        },
        onDone: () => {
          setTermBackground("bg-blue-800");
          setTermPromptColor("text-[#ff0000]");
          setTermOutputColor("text-[#00ff00]");
          setTermPrompt("🔴 ");
          setTermTitle("Terminable is awesomeR !");
        },
      },
      {
        prompt: "Seeeee, green on black is not THAAAT bad :D",
        output: "what do you mean it was a poor choice of colors...",
        onDone: () => {
          setTermBackground("bg-[#1a1a1a]");
          setTermPromptColor("text-[#00ff00]");
          setTermOutputColor("text-white");
          setTermPrompt("$ ");
          setTermTitle("Terminable is awesomeR !");
        },
      },
      {
        prompt: "y o u  c a n  t y p e  s l o o o o w  l y  t o o",
        typingSpeed: 150,
      },
      {
        prompt: "or extremely fast",
        typingSpeed: 5,
      },
      {
        prompt: (
          <div className="text-justify text-yellow-500">
            Both <span className="text-[#00ff00]">prompt</span> and{" "}
            <span className="text-white">output</span> can be react nodes !
          </div>
        ),
        output: [
          "Oooorrr",
          {
            content: (
              <div className="text-justify font-bold text-blue-500">
                An array of react nodes !
              </div>
            ),
          },
        ],
      },
      {
        prompt: "You can have callback Before the output",
        onBeforeOutput: () => {
          toast.success("Before the output !", {
            duration: 5000,
          });
          setTermTitle(
            <div className="text-yellow-500">
              Before the output !
              <img
                src="https://gifdb.com/images/high/animated-energetic-dancing-banana-a0if4xeqivxs5jdy.gif"
                alt="logo"
              />
            </div>,
          );
        },
        output: {
          content: "and after the output",
          delay: 2000,
          placeholder:
            "How do you like the banana in the prompt title, uuuh ??",
        },
        onDone: () => {
          setTermTitle("Terminable is awesome !");
        },
      },
      {
        prompt: "go checkout the docs and repos !",
        output: {
          content: (
            <div className="flex flex-row gap-2">
              <Link href="/docs">
                <Button className="bg-violet-500 text-white">Docs</Button>
              </Link>
              <Link href="https://github.com/your-repo" target="_blank">
                <Button className="bg-orange-500 text-white">Repo</Button>
              </Link>
            </div>
          ),
        },
      },
    ],
    [],
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          TerMinable
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
          A Minable Terminal for your docs
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-[1.5rem]">
          As a{" "}
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
            Shad-cn/ui
          </GlowLink>{" "}
          component
        </h3>
        <PkgMngCmdCopy
          className="w-full max-w-2xl"
          buttonClassName="px-6 py-3"
          preClassName="w-full"
          cmd={`shadcn/ui@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json`}
        />
      </div>

      <Terminable
        title={TermTitle}
        backgroundColor={TermBackground}
        promptColor={TermPromptColor}
        outputColor={TermOutputColor}
        termPrompt={TermPrompt}
        startLine={""}
        commands={commands}
      />
    </main>
  );
}
