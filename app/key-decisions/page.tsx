import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { Zap, RefreshCw, MessageSquare, Briefcase, Clock } from "lucide-react";

export default function KeyDecisionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Key Decisions
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Design decisions that simplify operations: GHL as central hub, single action to send to Jobber, clear ownership between platforms, and automated sync to maintain accuracy.
        </p>
      </div>

      <MermaidDiagram
        title="Decision Impact Map"
        chart={`
graph TB
    A[Central CRM Approach] -->|Enables| B[Unified Customer View]
    A -->|Requires| C[Integration Layer]
    
    D[Bidirectional Sync] -->|Ensures| E[Data Consistency]
    D -->|Adds| F[Complexity]
    
    G[Automation-First] -->|Reduces| H[Manual Work]
    G -->|Requires| I[Careful Design]
    
    J[Mobile-First Field Ops] -->|Improves| K[Technician Efficiency]
    J -->|Needs| L[Reliable Sync]
    
    style A fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style B fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style C fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style D fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style E fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style G fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
    style H fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style I fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style J fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style K fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style F fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style L fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="GHL as Central Hub"
          description="Sales and management work entirely in GHL."
          accent="purple"
          icon={Zap}
          responsibilities={[
            "Central workspace for all lead management",
            "Single 'Send to Jobber' action eliminates duplicate entry",
            "Clear ownership: GHL for sales, Jobber for execution",
          ]}
        />

        <ExplanationCard
          title="Single Action to Jobber"
          description="One button sends pre-filled request to Jobber."
          accent="orange"
          icon={Briefcase}
          responsibilities={[
            "Sales collects info in GHL",
            "Single action creates request in Jobber",
            "No re-entering customer data",
          ]}
        />

        <ExplanationCard
          title="Automated Sync"
          description="Key events in Jobber sync back to GHL automatically."
          accent="green"
          icon={RefreshCw}
          responsibilities={[
            "Quote issued/approved updates GHL pipeline",
            "Job completion triggers satisfaction survey",
            "Pipeline stays accurate without manual updates",
          ]}
        />
      </div>
    </div>
  );
}
