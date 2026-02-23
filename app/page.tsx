import { ExplanationCard } from "@/components/explanation-card";
import { MessageSquare, Zap, Calendar } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        
        <h1 className="mb-4 text-4xl font-bold text-foreground">Overview</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
        Sales Quoting & Dispatch System for Handy Dudes that centralizes leads from multiple sources into a single workspace, enabling the sales manager to track every lead from intake to close.
        <br />
        <br />
        The system is composed of three major parts. First, GoHighLevel serves as the central hub where all leads land and where automations handle key follow-ups and task management to simplify the sales manager’s workflow. Second, the Node Quote Engine acts as the quote database and AI-assisted recommendation service, storing all generated quotes and helping the sales manager make informed, explainable pricing decisions. Lastly, Jobber is used by technicians and clients to receive approved quotes and manage job execution.
        </p>
        <br />
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
          description="The Node Quote Engine is the intelligent bridge between the sales workspace and field operations. It receives lead context from the GoHighLevel opportunity (notes, photos, conversation history), consults a canonical materials & pricing dataset, uses an LLM to suggest three tiered quote options, applies deterministic pricing rules, stores every version, and outputs an editable draft back to the salesperson. It also corrects quotes that are off when technicians submit actuals and creates formal adjustment requests to be reviewed and approved by the salesperson."
          accent="blue"
          icon={MessageSquare}
          className="md:col-span-2"
        />
      </div>
    </div>
  );
}
