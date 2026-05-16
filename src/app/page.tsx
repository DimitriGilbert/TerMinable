"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "~/components/ui/button";
import Terminable from "~registry/components/ui/Terminable";
import { GlowLink } from "~/components/ui/glow-link";
import { PkgMngCmdCopy } from "~/components/PkgMngCmdCopy";

export default function HomePage() {
  const [TermTitle, setTermTitle] = useState<string | React.ReactNode>(
    "Terminable",
  );
  const [TermBackground, setTermBackground] = useState("#1a1b26");
  const [TermPromptColor, setTermPromptColor] = useState("#73daca");
  const [TermOutputColor, setTermOutputColor] = useState("#c0caf5");
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
              alt="dancing banana"
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
                className="text-blue-400"
                target="_blank"
              >
                <Button variant="outline" className="mt-2">
                  Butt3r.dev
                </Button>
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
            <div className="text-blue-400" key="thinking-content">
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
          setTermTitle("Terminable is awesome !");
        },
      },
      {
        prompt: "Don't like the default palette",
        output: {
          content: [
            "you can change background, prompt and output colors\n",
            "as well as the prompt line start and the title",
          ],
          placeholder: "...let me show you",
          delay: 2000,
        },
        onDone: () => {
          setTermBackground("#1e1e3f");
          setTermPromptColor("#f7768e");
          setTermOutputColor("#9ece6a");
          setTermPrompt("🔴 ");
          setTermTitle("Terminable is awesomeR !");
        },
      },
      {
        prompt: "Seeeee, the Tokyo Night palette is nicer though :D",
        output: "what do you mean it was a poor choice of colors...",
        onDone: () => {
          setTermBackground("#1a1b26");
          setTermPromptColor("#73daca");
          setTermOutputColor("#c0caf5");
          setTermPrompt("$ ");
          setTermTitle("Terminable");
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
          <div className="text-justify text-yellow-400">
            Both <span className="text-green-400">prompt</span> and{" "}
            <span className="text-blue-300">output</span> can be react nodes !
          </div>
        ),
        output: [
          "Oooorrr",
          {
            content: (
              <div className="text-justify font-bold text-blue-400">
                An array of react nodes !
              </div>
            ),
          },
        ],
      },
      {
        prompt: "You can have callback Before the output",
        onBeforeOutput: () => {
          setTermTitle(
            <div className="text-yellow-400">
              Before the output !
              <img
                src="https://gifdb.com/images/high/animated-energetic-dancing-banana-a0if4xeqivxs5jdy.gif"
                alt="dancing banana"
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
                <Button variant="outline">Docs</Button>
              </Link>
              <Link href="https://github.com/your-repo" target="_blank">
                <Button variant="outline">Repo</Button>
              </Link>
            </div>
          ),
        },
      },
    ],
    [],
  );

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="container grid grid-cols-1 items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            TerMinable
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/80">
            A terminal simulator for your docs
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
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
              shadcn/ui
            </GlowLink>{" "}
            component
          </p>
          <div className="mt-8 w-full max-w-xl">
            <PkgMngCmdCopy
              className="w-full"
              buttonClassName="px-4 py-2 text-sm"
              preClassName="w-full"
              cmd={`shadcn@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json`}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Terminable
            title={TermTitle}
            backgroundColor={TermBackground}
            promptColor={TermPromptColor}
            outputColor={TermOutputColor}
            termPrompt={TermPrompt}
            startLine={""}
            commands={commands}
            titleBarVariant="macos"
            width="w-full"
          />
        </div>
      </div>
    </main>
  );
}
