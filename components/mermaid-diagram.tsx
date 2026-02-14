"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "loose",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
        },
        themeVariables: {
          primaryColor: "#3b82f6",
          primaryTextColor: "#ffffff",
          primaryBorderColor: "#1e40af",
          lineColor: "#64748b",
          secondaryColor: "#1e293b",
          tertiaryColor: "#0f172a",
        },
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (ref.current && isInitialized) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      ref.current.id = id;
      ref.current.textContent = chart;

      mermaid.run({
        nodes: [ref.current],
      });
    }
  }, [chart, isInitialized]);

  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6">
      {title && (
        <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
          {title}
        </h3>
      )}
      <div ref={ref} className="mermaid" />
    </div>
  );
}
