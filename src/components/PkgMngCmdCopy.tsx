"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { FaCopy } from "react-icons/fa";

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
    { name: "npm", command: "npx " + cmd },
    { name: "yarn", command: "yarn " + cmd },
    { name: "pnpm", command: "pnpm " + cmd },
    { name: "bun", command: "bun x --bun " + cmd },
  ];

  const [selectedManager, setSelectedManager] = useState(packageManagers[0]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(selectedManager?.command ?? "")
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard!");
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
          className={`rounded-lg border border-gray-700 bg-gray-900/50 p-4 backdrop-blur-md ${preClassName}`}
        >
          <code className="flex items-center gap-2 text-sm text-white">
            {selectedManager?.command}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute -right-2 -top-2 rounded-full border border-gray-700 bg-gray-800/50 p-2 opacity-40 backdrop-blur-md transition-opacity hover:bg-gray-700/50 group-hover:opacity-100"
        >
          <FaCopy className="text-white" />
        </button>
      </div>
    </div>
  );
}
