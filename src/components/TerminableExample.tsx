"use client";
import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Terminable, {
  type CommandEntry,
  type TitleBarVariant,
} from "~registry/components/ui/Terminable";
import { CopyButton } from "~/components/copy-button";

export type TerminableExampleProps = {
  commands: CommandEntry[];
  title: string | React.ReactNode;
  codeString?: string;
  start?: boolean;
  titleBarVariant?: TitleBarVariant;
};

const TerminableExample: React.FC<TerminableExampleProps> = ({
  commands,
  title,
  codeString,
  start,
  titleBarVariant,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const instanceKey = useMemo(() => {
    let h = 0;
    for (const cmd of commands) {
      const s = typeof cmd.prompt === "string" ? cmd.prompt : "";
      for (let i = 0; i < s.length; i++) {
        h = ((h << 5) - h + s.charCodeAt(i)) | 0;
      }
    }
    return h;
  }, [commands]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div className={activeTab === "preview" ? "" : "hidden"}>
            <Terminable
              commands={commands}
              start={activeTab === "preview" && !!start}
              key={instanceKey}
              titleBarVariant={titleBarVariant}
            />
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-4">
          <div className="relative">
            <pre className="overflow-x-auto rounded-md bg-muted p-4">
              <code className="text-sm text-foreground/80">
                {codeString?.trim()}
              </code>
            </pre>
            <CopyButton
              value={codeString?.trim() ?? ""}
              className="absolute right-2 top-2"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TerminableExample;
