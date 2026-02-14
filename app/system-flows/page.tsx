import { StepFlow } from "@/components/step-flow";
import { ExplanationCard } from "@/components/explanation-card";
import { ArrowRight, FileText, Briefcase } from "lucide-react";

export default function SystemFlowsPage() {
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

      <StepFlow
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
                    <button className="mt-2 w-full rounded-lg bg-[#ef4444] px-2 py-1 text-xs font-bold text-white">
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
      />

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
