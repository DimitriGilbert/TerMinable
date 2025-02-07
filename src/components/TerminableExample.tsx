"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Terminable, {
  type CommandEntry,
} from "~registry/components/ui/Terminable";
import { CopyButton } from "~/components/copy-button";

export type TerminableExampleProps = {
  commands: CommandEntry[];
  title: string | React.ReactNode;
  codeString?: string; // New prop for raw code string
  start?: boolean; // Add this line
};

const TerminableExample: React.FC<TerminableExampleProps> = ({
  commands,
  title,
  codeString,
  start,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [instanceKey, setInstanceKey] = useState(0);

  // Reset terminal when commands change
  useEffect(() => {
    setInstanceKey(prev => prev + 1);
  }, [commands]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4" forceMount>
          <div className={activeTab === "preview" ? "" : "hidden"}>
            <Terminable 
              commands={commands} 
              start={activeTab === 'preview' && !!start}
              key={instanceKey}
            />
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-4">
          <div className="relative">
            <pre className="overflow-x-auto rounded-md bg-gray-800 p-4">
              <code className="text-sm text-gray-100">
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
