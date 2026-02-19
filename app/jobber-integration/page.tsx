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

      <div className="grid gap-6 md:grid-cols-3">
        <ExplanationCard
          title="Pre-filled Request → Client Quote"
          description="A pre-filled request from GHL becomes a Jobber quote that can be shared with the client."
          accent="orange"
          icon={FileText}
          responsibilities={[
            "GHL sends customer and job details to Jobber in a single action",
            "Jobber creates a structured quote with line items and pricing",
            "Quote link is sent to the client via email/SMS from Jobber",
          ]}
        />

        <ExplanationCard
          title="Approval → Technician Assignment"
          description="Client-approved quotes turn into scheduled jobs with clear technician ownership."
          accent="green"
          icon={Calendar}
          responsibilities={[
            "Client approves the quote online",
            "Quote converts to a job with date, time, and location",
            "Dispatcher assigns the right technician in Jobber's schedule",
          ]}
        />

        <ExplanationCard
          title="Track Stages & Sync to GHL"
          description="Jobber tracks each stage and syncs key updates back to GHL."
          accent="blue"
          icon={RefreshCw}
          responsibilities={[
            "Job status moves from quoted → scheduled → in progress → completed → invoiced",
            "Status and invoice outcomes sync to the matching opportunity in GHL",
            "Sales always sees an accurate view of each job's progress",
          ]}
        />
      </div>
    </div>
  );
}
