interface DocsCodeBlockProps {
  children: string;
}

export function DocsCodeBlock({ children }: DocsCodeBlockProps) {
  return (
    <div className="overflow-x-auto rounded-md bg-muted p-4 my-4">
      <pre className="text-sm">
        <code className="text-foreground/80">
          {children}
        </code>
      </pre>
    </div>
  );
} 