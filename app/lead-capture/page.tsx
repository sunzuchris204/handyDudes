import { StepFlow } from "@/components/step-flow";
import { ExplanationCard } from "@/components/explanation-card";
import { MessageSquare, Filter, Link2 } from "lucide-react";

export default function LeadCapturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Lead Capture
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          All leads from website chat widget, Thumbtack, and phone calls are captured and managed centrally in GoHighLevel. Customers can request service, upload photos, and communicate in real-time.
        </p>
      </div>

      <StepFlow
        title="Lead Capture Process"
        steps={[
          {
            title: "INITIATE",
            description: "Customer initiates contact via website chat, Thumbtack, or phone call.",
            content: (
              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                    <div>
                      <div className="text-xs font-semibold">Website Chat</div>
                      <div className="text-xs text-muted-foreground">Customer</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-background p-2 text-xs">
                    Hi, I need help with plumbing repair
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Chat widget, Thumbtack, or phone
                </div>
              </div>
            ),
          },
          {
            title: "CAPTURED",
            description: "Lead automatically captured in GHL with contact info and service request.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">GoHighLevel</div>
                  <div className="space-y-1 text-xs">
                    <div>✓ Contact created</div>
                    <div>✓ Service type: Plumbing</div>
                    <div>✓ Assigned to pipeline</div>
                    <div>✓ Welcome message sent</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Auto-assigned to sales rep
                </div>
              </div>
            ),
          },
          {
            title: "NOTIFIED",
            description: "Sales team receives notification in GHL unified inbox with full conversation history.",
            content: (
              <div className="space-y-2">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <div className="mb-2 text-xs font-bold">Sales Dashboard</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>New Lead - Plumbing</span>
                    </div>
                    <div className="text-muted-foreground">
                      Full history, notes, photos visible
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Ready for qualification
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Website Chat Widget"
          description="Mobile-friendly chat embedded on website."
          accent="blue"
          icon={MessageSquare}
          responsibilities={[
            "Customers request service and upload photos",
            "Real-time communication with sales team",
            "All conversations captured in GHL",
          ]}
        />

        <ExplanationCard
          title="Thumbtack Integration"
          description="Thumbtack leads integrated directly into GHL."
          accent="yellow"
          icon={Filter}
          responsibilities={[
            "Leads appear in GHL inbox automatically",
            "No manual data entry required",
          ]}
        />

        <ExplanationCard
          title="Phone & SMS"
          description="All communication managed centrally through GHL."
          accent="purple"
          icon={Link2}
          responsibilities={[
            "Phone calls logged in GHL",
            "SMS conversations tracked",
            "Complete interaction history in one place",
          ]}
        />
      </div>
    </div>
  );
}
