import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { MessageSquare, Zap, Link2, Shuffle, Webhook } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Integrations
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Seamless integration with existing tools: GoHighLevel (central CRM), Jobber (service operations), Thumbtack (lead source), and phone/SMS/email (all managed through GHL).
        </p>
      </div>

      <MermaidDiagram
        title="Integration Architecture"
        chart={`
graph TB
    A[Website Chat Widget] -->|Webhook/API| B[GoHighLevel CRM]
    B -->|REST API| C[Jobber Integration]
    C -->|Webhook/API| B
    B -->|Dashboard| D[Manager View]
    
    E[GoHighLevel Automations] -->|Triggers| B
    F[Jobber Mobile App] -->|Updates| C
    C -->|Syncs| B
    
    style A fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style C fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style D fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
    style E fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style F fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="GoHighLevel (GHL)"
          description="Central CRM, communication hub, automation engine, dashboards, and reporting."
          accent="purple"
          icon={Zap}
          responsibilities={[
            "Handles lead capture from website chat, Thumbtack, phone",
            "Manages all customer communication (SMS, email)",
            "Single workspace for sales and management",
          ]}
        />

        <ExplanationCard
          title="Jobber"
          description="Service operations system for requests, quotes, scheduling, invoicing, and payments."
          accent="orange"
          icon={Link2}
          responsibilities={[
            "Handles all field service execution",
            "Updates sync back to GHL automatically",
            "Technicians use Jobber mobile app only",
          ]}
        />

        <ExplanationCard
          title="Thumbtack"
          description="Lead source integrated directly into GHL."
          accent="blue"
          icon={MessageSquare}
          responsibilities={[
            "Leads appear in GHL inbox automatically",
            "No manual data entry required",
          ]}
        />
      </div>
    </div>
  );
}
