import { StepFlow } from "@/components/step-flow";
import { ExplanationCard } from "@/components/explanation-card";
import { ArrowRight, FileText, Briefcase } from "lucide-react";
import { SystemFlowDiagram } from "@/components/system-flow-diagram";

export default function SystemFlowsPage() {
  const workflows = [
    {
      title: "1. LEAD TO QUOTE",
      steps: [
        {
          entity: "lead",
          step: 1,
          title: "Customer contacts",
          description: "Chat, Thumbtack, or phone.",
        },
        {
          entity: "ghl",
          step: 2,
          title: "GHL captures & qualifies",
          description: "Sales collects details in pipeline.",
        },
        {
          entity: "node",
          step: 3,
          title: "AI generates quotes",
          description: "Multiple options from notes.",
        },
        {
          entity: "ghl",
          step: 4,
          title: "Sales sends to Jobber",
          description: "Selected quote becomes request.",
        },
        {
          entity: "jobber",
          step: 5,
          title: "Client approves",
          description: "Quote sent via email/SMS.",
        },
      ],
    },
    {
      title: "2. JOB TO COMPLETION",
      steps: [
        {
          entity: "jobber",
          step: 1,
          title: "Job scheduled",
          description: "Technician assigned.",
        },
        {
          entity: "technician",
          step: 2,
          title: "Work completed",
          description: "Status updated in Jobber.",
        },
        {
          entity: "jobber",
          step: 3,
          title: "Invoice sent",
          description: "Payment processed.",
        },
        {
          entity: "ghl",
          step: 4,
          title: "Survey & sync",
          description: "Status syncs. Survey sent.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          System Flows
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Complete workflow from first contact to job completion: Lead captured in GHL → Sales qualifies and sends to Jobber → Jobber handles quoting, scheduling, and execution → Updates sync back to GHL → Post-job survey automatically sent.
        </p>
      </div>

      {/* <StepFlow
        title="Complete Lead-to-Job Flow"
        steps={[
          {
            title: "CAPTURE",
            description: "Customer contacts via website chat, Thumbtack, or phone. Lead automatically captured in GHL.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Lead Source</div>
                  <div className="space-y-1 text-xs">
                    <div>💬 Website Chat</div>
                    <div>📱 Thumbtack</div>
                    <div>☎️ Phone Call</div>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-500/20 p-2 text-xs">
                  → Auto-sync to GHL
                </div>
              </div>
            ),
          },
          {
            title: "QUALIFY & SEND",
            description: "Sales rep qualifies lead in GHL, collects details, then clicks 'Send to Jobber' to create pre-filled request.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">GHL Dashboard</div>
                  <div className="space-y-1 text-xs">
                    <div>✓ Lead qualified</div>
                    <div>📝 Details collected</div>
                    <button className="mt-2 w-full rounded-lg bg-[hsl(var(--accent-purple))] px-2 py-1 text-xs font-bold text-white">
                      SEND TO JOBBER
                    </button>
                  </div>
                </div>
                <div className="rounded-lg bg-orange-500/20 p-2 text-xs">
                  → Pre-filled request in Jobber
                </div>
              </div>
            ),
          },
          {
            title: "QUOTE & SCHEDULE",
            description: "Jobber creates quote, sends to customer. Customer approves. Job scheduled and assigned to technician.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-orange-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Jobber</div>
                  <div className="space-y-1 text-xs">
                    <div>📄 Quote created</div>
                    <div>✅ Customer approved</div>
                    <div>📅 Job scheduled</div>
                    <div>👷 Technician assigned</div>
                  </div>
                </div>
                <div className="rounded-lg bg-green-500/20 p-2 text-xs">
                  → Status syncs to GHL
                </div>
              </div>
            ),
          },
          {
            title: "COMPLETE & SURVEY",
            description: "Technician completes job in Jobber. Update syncs to GHL. Satisfaction survey automatically sent to customer.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Job Complete</div>
                  <div className="space-y-1 text-xs">
                    <div>✓ Work finished</div>
                    <div>📧 Invoice sent</div>
                    <div>📊 Survey sent</div>
                    <div>💰 Payment received</div>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-500/20 p-2 text-xs">
                  → Pipeline: Closed Won
                </div>
              </div>
            ),
          },
        ]}
      /> */}

      <div className="rounded-lg border border-border bg-card/60 p-6 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-card/50">
        <div className="mb-4">
          <h2 className="mb-2 text-2xl font-bold text-foreground">System Flow Diagrams</h2>
          <p className="text-sm text-muted-foreground">
            How data moves between lead sources, GHL, Node Quote Engine, and Jobber for each core workflow.
          </p>
        </div>
        <SystemFlowDiagram workflows={workflows} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Lead to Request"
          description="Lead captured → GHL → Sales qualifies → Send to Jobber."
          accent="blue"
          icon={ArrowRight}
          responsibilities={[
            "Website chat, Thumbtack, or phone → GHL",
            "Sales works in GHL to qualify and collect details",
            "Single 'Send to Jobber' creates pre-filled request",
          ]}
        />

        <ExplanationCard
          title="Request to Job"
          description="Jobber converts request → Quote → Customer approval → Scheduled job."
          accent="orange"
          icon={FileText}
          responsibilities={[
            "Jobber creates quote and sends link to customer",
            "Customer approves via email or SMS",
            "Approved quote becomes scheduled job",
          ]}
        />

        <ExplanationCard
          title="Job to Completion"
          description="Technician completes work → Jobber updates → Syncs to GHL → Survey sent."
          accent="green"
          icon={Briefcase}
          responsibilities={[
            "Technician marks job complete in Jobber",
            "Update syncs to GHL automatically",
            "GHL sends satisfaction survey to customer",
          ]}
        />
      </div>
    </div>
  );
}
