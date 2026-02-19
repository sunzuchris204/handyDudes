import { ExplanationCard } from "@/components/explanation-card";
import { Briefcase, Cpu, Zap } from "lucide-react";

export default function SalesDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Sales Dashboard</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          All leads (Thumbtack, phone calls, and the website chat widget) are centralized in GoHighLevel (GHL). Sales tracks every detail until the request is ready for quoting, selects the best quote option inside GHL, then sends it to Jobber to finalize and move the job forward.
        </p>
      </div>

      {/* GHL Opportunities (mock) */}
      <section className="rounded-lg border border-border bg-card/60 p-6 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-card/50">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="text-xs font-semibold text-muted-foreground">
              GoHighLevel
            </div>
            <h2 className="truncate text-xl font-bold text-foreground">
              Opportunities · Lead Intake Pipeline
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-md border border-border bg-background/60 px-3 py-2 text-xs text-muted-foreground">
              Search…
            </div>
            <div className="rounded-md border border-border bg-background/60 px-3 py-2 text-xs text-muted-foreground">
              Filters
            </div>
            <button
              type="button"
              className="rounded-md bg-[hsl(var(--accent-purple))] px-4 py-2 text-xs font-bold text-white shadow-lg"
              aria-label="Pull quotes"
            >
              Pull Quotes
            </button>
          </div>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-2">
          <div className="grid min-w-[960px] grid-cols-4 gap-4">
            {/* Column: New Request */}
            <div className="rounded-lg border border-border bg-background/30 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-bold">New Request</div>
                <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-300">
                  3
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">Plumbing Repair</div>
                      <div className="text-xs text-muted-foreground">John Doe</div>
                    </div>
                    <div className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                      Chat
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Leaky faucet · Photos received
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">Electrical</div>
                      <div className="text-xs text-muted-foreground">Sarah K.</div>
                    </div>
                    <div className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                      Thumbtack
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Outlet not working
                  </div>
                </div>
              </div>
            </div>

            {/* Column: Info Needed */}
            <div className="rounded-lg border border-border bg-background/30 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-bold">Info Needed</div>
                <div className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-semibold text-yellow-300">
                  3
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">Deep Cleaning</div>
                      <div className="text-xs text-muted-foreground">Michael R.</div>
                    </div>
                    <div className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                      Phone
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Need photos + square footage
                  </div>
                  <div className="mt-3 rounded-md bg-background/60 px-2 py-1 text-[10px] text-muted-foreground">
                    Task: request missing details
                  </div>
                </div>

                {/* Card representing onsite audit */}
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">Onsite Audit</div>
                      <div className="text-xs text-muted-foreground">Commercial Roof</div>
                    </div>
                    <div className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold text-yellow-300">
                      Audit
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Site visit required before quoting · Access + safety details needed
                  </div>
                  <div className="mt-3 rounded-md bg-background/60 px-2 py-1 text-[10px] text-muted-foreground">
                    Task: schedule onsite audit & capture photos/measurements
                  </div>
                </div>
              </div>
            </div>

            {/* Column: Ready for Quote */}
            <div className="rounded-lg border border-border bg-background/30 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-bold">Ready for Quote</div>
                <div className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-300">
                  1
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">HVAC Tune-up</div>
                      <div className="text-xs text-muted-foreground">Amanda P.</div>
                    </div>
                    <div className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                      Chat
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Notes complete · Photos complete
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="flex-1 rounded-md border border-border bg-background/60 px-2 py-1.5 text-[11px] font-semibold text-muted-foreground"
                      aria-label="Review notes"
                    >
                      Review
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-md bg-[hsl(var(--accent-purple))] px-2 py-1.5 text-[11px] font-bold text-white"
                      aria-label="Send to Jobber"
                    >
                      Send to Jobber
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Column: Sent to Jobber */}
            <div className="rounded-lg border border-border bg-background/30 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-bold">Sent to Jobber</div>
                <div className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-300">
                  2
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">Gutter Repair</div>
                      <div className="text-xs text-muted-foreground">Kevin S.</div>
                    </div>
                    <div className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-300">
                      Synced
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Request created in Jobber
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="GoHighLevel (GHL)"
          description="Central place where all leads are tracked, worked, and communicated with until ready for quoting."
          accent="purple"
          icon={Zap}
          responsibilities={[
            "All sources (chat, Thumbtack, phone) flow into one pipeline",
            "Sales collects notes/photos and moves the opportunity through stages",
            "Sales selects the best quote option inside GHL",
            "Appointment reminders via SMS/email",
            "Follow-up sequences based on pipeline stage",
            "Post-job satisfaction survey automatically sent",
          ]}
        />

        <ExplanationCard
          title="Node Quote Engine"
          description="Generates AI-assisted quote options from the lead’s notes and details."
          accent="blue"
          icon={Cpu}
          responsibilities={[
            "Triggered by the 'Pull Quotes' action in GHL (shown above)",
            "Produces multiple quote options for sales review",
            "Stores quote history in an external database for analytics",
            "Compares technician quotes against sales quotes to detect mismatches",
            "Helps speed up quoting while keeping final decisions with the salesperson",
          ]}
        />

        <ExplanationCard
          title="Jobber"
          description="Finalizes the selected quote and runs the job execution workflow."
          accent="orange"
          icon={Briefcase}
          responsibilities={[
            "Receives the selected quote/request from GHL",
            "Converts to formal quote, schedules work, assigns technicians",
            "Handles invoicing and payments",
          ]}
        />
      </div>
    </div>
  );
}

