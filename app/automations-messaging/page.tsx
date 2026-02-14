import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { Sparkles, FileText, Bell, Heart, DollarSign } from "lucide-react";

export default function AutomationsMessagingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Automations & Messaging
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          GHL handles automated follow-ups, appointment reminders, and post-job surveys via SMS and email. All communication is managed centrally through GHL.
        </p>
      </div>

      <MermaidDiagram
        title="Automation & Messaging Flow"
        chart={`
graph TB
    A[Trigger Event] -->|Lead Captured| B[Welcome Sequence]
    A -->|Quote Sent| C[Quote Follow-up]
    A -->|Job Scheduled| D[Appointment Reminder]
    A -->|Job Complete| E[Completion Sequence]
    A -->|Invoice Sent| F[Payment Reminder]
    
    B -->|Day 1| G[SMS/Email]
    B -->|Day 3| H[Follow-up]
    C -->|Day 2| I[Quote Check-in]
    D -->|24hr Before| J[Reminder]
    E -->|Immediate| K[Thank You]
    E -->|Day 1| L[Survey Request]
    
    style A fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style B fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style C fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style D fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style F fill:#eab308,stroke:#ca8a04,stroke-width:2px,color:#fff
        `}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Automated Follow-ups"
          description="GHL sends automated messages throughout customer journey."
          accent="blue"
          icon={Sparkles}
          responsibilities={[
            "Appointment reminders via SMS/email",
            "Follow-up sequences based on pipeline stage",
            "Post-job satisfaction survey automatically sent",
          ]}
        />

        <ExplanationCard
          title="Post-Job Survey"
          description="Automatic survey sent when job marked complete in Jobber."
          accent="purple"
          icon={Heart}
          responsibilities={[
            "Survey sent automatically via GHL",
            "Feedback recorded on opportunity",
            "Low scores trigger manager alerts",
          ]}
        />
      </div>
    </div>
  );
}
