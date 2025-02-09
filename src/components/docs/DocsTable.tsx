interface DocsTableProps {
  headers: string[];
  rows: Array<Array<string | React.ReactNode>>;
}

export function DocsTable({ headers, rows }: DocsTableProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-muted">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-foreground/80">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-background">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-foreground/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 