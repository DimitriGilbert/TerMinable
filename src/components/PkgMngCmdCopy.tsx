"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Copy } from "lucide-react";

interface PkgMngCmdCopyProps {
  registryUrl?: string;
  className?: string;
  buttonClassName?: string;
  preClassName?: string;
  cmd?: string;
}

export function PkgMngCmdCopy({
  className = "",
  buttonClassName = "",
  preClassName = "",
  cmd = "",
}: PkgMngCmdCopyProps) {
  const packageManagers = [
    { name: "npx", command: "npx " + cmd },
    { name: "bunx", command: "bunx " + cmd },
    { name: "pnpm", command: "pnpm dlx " + cmd },
    { name: "yarn", command: "yarn dlx " + cmd },
  ];

  const [selectedManager, setSelectedManager] = useState(packageManagers[0]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(selectedManager?.command ?? "")
      .catch(() => {
        /* silent failure */
      });
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="flex gap-2">
        {packageManagers.map((manager) => (
          <Button
            key={manager.name}
            variant={
              selectedManager?.name === manager.name ? "default" : "outline"
            }
            onClick={() => setSelectedManager(manager)}
            className={`capitalize ${buttonClassName}`}
          >
            {manager.name}
          </Button>
        ))}
      </div>

      <div className="group relative">
        <pre
          className={`rounded-lg border border-border bg-card p-4 backdrop-blur-md ${preClassName}`}
        >
          <code className="flex items-center gap-2 text-sm text-foreground">
            {selectedManager?.command}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute -right-2 -top-2 rounded-full border border-border bg-card/80 p-2 opacity-40 backdrop-blur-md transition-opacity group-hover:opacity-100"
        >
          <Copy className="text-foreground" />
        </button>
      </div>
    </div>
  );
}
