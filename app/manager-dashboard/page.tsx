import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { TrendingUp, BarChart3, Briefcase, DollarSign, Users } from "lucide-react";

export default function ManagerDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Manager Dashboard
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          High-level dashboard in GHL provides visibility into operations without managing individual conversations. Shows lead volume, quote-to-job conversion rates, job status, and customer satisfaction scores.
        </p>
      </div>

      <MermaidDiagram
        title="Manager Dashboard Data Sources"
        chart={`
graph TB
    A[Lead Capture Data] -->|Metrics| D[Manager Dashboard]
    B[Pipeline Data] -->|Conversion Rates| D
    C[Jobber Sync Data] -->|Job Metrics| D
    E[Invoice Data] -->|Revenue| D
    F[Automation Data] -->|Engagement| D
    
    D -->|Displays| G[KPIs & Reports]
    G -->|Tracks| H[Performance Trends]
    
    style A fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style C fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style D fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
    style E fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style F fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style G fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style H fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Key Metrics"
          description="Visibility into operations performance."
          accent="blue"
          icon={TrendingUp}
          responsibilities={[
            "Lead volume and sources",
            "Quote-to-job conversion rates",
            "Job status: requested, quoted, scheduled, completed, paid",
            "Customer satisfaction scores",
          ]}
        />

        <ExplanationCard
          title="Quality Monitoring"
          description="Automatic alerts for low satisfaction scores."
          accent="red"
          icon={BarChart3}
          responsibilities={[
            "Low survey ratings trigger manager alerts",
            "Follow-up tasks generated automatically",
            "Ensures issues addressed quickly",
          ]}
        />
      </div>
    </div>
  );
}
