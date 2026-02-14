import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { FileText, Calendar, RefreshCw, DollarSign, AlertCircle } from "lucide-react";

export default function JobberIntegrationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Jobber Integration
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Jobber handles all service execution: converting requests into quotes, sending quote links to customers, scheduling approved work, assigning technicians, tracking progress, and managing invoicing. Key events sync back to GHL automatically.
        </p>
      </div>

      <MermaidDiagram
        title="Jobber Integration Flow"
        chart={`
graph LR
    A[GoHighLevel] -->|Quote Data| B[Integration Layer]
    B -->|Creates| C[Jobber Quote]
    C -->|Approved| D[Jobber Job]
    D -->|Scheduled| E[Technician Assignment]
    E -->|Updates| D
    D -->|Completed| F[Jobber Invoice]
    F -->|Syncs Back| B
    B -->|Updates| A[GoHighLevel]
    
    style A fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style B fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style C fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style D fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style F fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Request to Quote"
          description="Pre-filled request from GHL becomes quote in Jobber."
          accent="orange"
          icon={FileText}
          responsibilities={[
            "Sales sends request to Jobber with one action",
            "Jobber converts to quote and sends link to customer",
            "Customer approves via email or SMS",
          ]}
        />

        <ExplanationCard
          title="Job Execution"
          description="Approved quotes become scheduled jobs."
          accent="green"
          icon={Calendar}
          responsibilities={[
            "Schedule approved work and assign technicians",
            "Track job progress in Jobber mobile app",
            "Manage invoicing and payments",
          ]}
        />

        <ExplanationCard
          title="Bidirectional Sync"
          description="All key events sync back to GHL automatically."
          accent="blue"
          icon={RefreshCw}
          responsibilities={[
            "Quote issued/approved updates GHL pipeline",
            "Job scheduled/completed syncs to GHL",
            "Invoice created/paid updates opportunity status",
          ]}
        />
      </div>
    </div>
  );
}
