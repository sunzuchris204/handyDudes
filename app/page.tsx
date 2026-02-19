import { SystemFlowDiagram } from "@/components/system-flow-diagram";
import { ExplanationCard } from "@/components/explanation-card";
import { MessageSquare, Zap, Calendar, Link2 } from "lucide-react";

export default function OverviewPage() {

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        
        <h1 className="mb-4 text-4xl font-bold text-foreground">Overview</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A lead-to-job automation platform for Handy Dudes that connects website chat widgets, GoHighLevel CRM, and Jobber field service management. The system automates the complete customer journey from initial lead contact through quote generation, job scheduling, technician assignment, with seamless data synchronization between all platforms.
        </p>
        <br/>
        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
          <span>Prepared by <span className="font-semibold text-foreground">Ark Innovations</span></span>
          <span>Prepared for <span className="font-semibold text-foreground">Handy Dudes</span></span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="GoHighLevel"
          description="GoHighLevel serves as the central point of the entire workflow, tracking each client from initial lead contact through to becoming a paying customer. It handles all automation and email follow-ups, ensuring consistent communication throughout the customer journey. The platform syncs seamlessly with Jobber, maintaining real-time data consistency between sales and field operations. As the central CRM, all sales activities are managed within GoHighLevel, providing a unified workspace for the team."
          accent="purple"
          icon={Zap}
        />

        <ExplanationCard
          title="Jobber"
          description="Jobber handles all field service operations, sending quotes to clients via email and SMS for approval. Once approved, it tracks the entire work process and job status in real-time. The system sends quotes and detailed job information directly to technicians, enabling them to complete work efficiently. Jobber also manages invoicing and payment processing, ensuring smooth financial operations and automatically syncing completion status back to GoHighLevel."
          accent="orange"
          icon={Calendar}
        />

        <ExplanationCard
          title="Node Quote Engine"
          description="The Node Quote Engine acts as an intelligent bridge between GoHighLevel and Jobber, generating AI-powered quote options from lead notes and conversation history. It stores all quote history in a dedicated database, creating a comprehensive record of pricing decisions. This enables the system to detect mismatches between sales quotes and technician quotes, helping maintain consistency and accuracy across the entire quoting process."
          accent="blue"
          icon={MessageSquare}
          className="md:col-span-2"
        />
      </div>
    </div>
  );
}
