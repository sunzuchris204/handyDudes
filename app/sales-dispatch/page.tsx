import { StepFlow } from "@/components/step-flow";
import { ExplanationCard } from "@/components/explanation-card";
import { BarChart3, FileText, Calendar } from "lucide-react";

export default function SalesDispatchPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Sales & Dispatch Dashboard
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Sales staff work entirely from the GHL dashboard. All incoming chats, calls, SMS, and Thumbtack leads appear in one inbox. Each request is displayed as an opportunity with notes, photos, and conversation history.
        </p>
      </div>

      <StepFlow
        title="Sales Workflow"
        steps={[
          {
            title: "QUALIFY",
            description: "Sales rep reviews lead in GHL unified inbox, collects details, and qualifies the request.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">GHL Dashboard</div>
                  <div className="space-y-1 text-xs">
                    <div>📋 New Request</div>
                    <div>💬 Chat history</div>
                    <div>📸 Photos uploaded</div>
                    <div>📝 Notes added</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  All info in one place
                </div>
              </div>
            ),
          },
          {
            title: "SEND",
            description: "Single 'Send to Jobber' button creates pre-filled request in Jobber with customer details.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-orange-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Send to Jobber</div>
                  <button className="w-full rounded-lg bg-[hsl(var(--accent-purple))] px-3 py-2 text-xs font-bold text-white">
                    SEND TO JOBBER
                  </button>
                  <div className="mt-2 space-y-1 text-xs">
                    <div>✓ Customer info pre-filled</div>
                    <div>✓ Service details included</div>
                    <div>✓ No duplicate entry</div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "TRACK",
            description: "Pipeline updates automatically as Jobber events sync back: quoted → scheduled → completed → paid.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Pipeline Status</div>
                  <div className="space-y-1 text-xs">
                    <div>New Request → Quoted</div>
                    <div>Quoted → Scheduled</div>
                    <div>Scheduled → Completed</div>
                    <div>Completed → Paid</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Auto-updates from Jobber
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Unified Inbox"
          description="All leads in one place."
          accent="purple"
          icon={BarChart3}
          responsibilities={[
            "Chats, calls, SMS, and Thumbtack leads in one inbox",
            "Each request shown as opportunity with full history",
            "Notes, photos, and conversations visible",
          ]}
        />

        <ExplanationCard
          title="Send to Jobber"
          description="Single action to create pre-filled request."
          accent="orange"
          icon={FileText}
          responsibilities={[
            "Sales updates request details in GHL",
            "Single 'Send to Jobber' button creates request",
            "No duplicate data entry - customer info pre-filled",
          ]}
        />

        <ExplanationCard
          title="Pipeline Tracking"
          description="Clear stages: New Request → Quoted → Scheduled → Completed → Paid."
          accent="green"
          icon={Calendar}
          responsibilities={[
            "Move leads through stages in GHL",
            "Jobber updates sync back automatically",
            "Pipeline stays accurate in real-time",
          ]}
        />
      </div>
    </div>
  );
}
