import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { MessageSquare, Zap, Calendar, Link2 } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Overview</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A streamlined system connecting GoHighLevel (GHL) and Jobber to automate the full customer journey from first contact to job completion. GHL serves as the central workspace for sales and management. Jobber handles all service execution workflows.
        </p>
      </div>

      <MermaidDiagram
        title="System Architecture Overview"
        chart={`
graph TB
    A[Website Chat Widget] -->|Lead Data| B[GoHighLevel CRM]
    B -->|Pipeline Management| C[Sales & Dispatch Dashboard]
    B -->|Automations| D[Jobber Integration]
    D -->|Scheduling & Quotes| E[Technician Workflow]
    E -->|Job Updates| D
    D -->|Invoice Data| B
    B -->|KPIs & Analytics| F[Manager Dashboard]
    
    style A fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style C fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style D fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style F fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="GoHighLevel (GHL)"
          description="Central workspace for sales and management."
          accent="purple"
          icon={Zap}
          responsibilities={[
            "Handles lead capture from website chat, Thumbtack, and phone",
            "Central CRM, communication hub, and automation engine",
            "Sales staff work entirely inside GHL",
            "Single 'Send to Jobber' action creates pre-filled requests",
          ]}
        />

        <ExplanationCard
          title="Jobber"
          description="Service operations system for field execution."
          accent="orange"
          icon={Calendar}
          responsibilities={[
            "Converts requests into quotes and sends to customers",
            "Schedules approved work and assigns technicians",
            "Tracks job progress and manages invoicing",
            "Updates sync back to GHL automatically",
          ]}
        />

        <ExplanationCard
          title="Automated Workflows"
          description="Bidirectional sync keeps both systems current."
          accent="green"
          icon={Link2}
          responsibilities={[
            "Job completion triggers post-job satisfaction survey",
            "Low satisfaction scores generate manager alerts",
            "All key events sync between GHL and Jobber",
            "Reduces manual work and maintains data accuracy",
          ]}
        />
      </div>
    </div>
  );
}
