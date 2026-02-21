import { ExplanationCard } from "@/components/explanation-card";
import { Cpu, ArrowRight, Database, AlertTriangle } from "lucide-react";

export default function NodeQuoteEnginePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Node Quote Engine
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The Node Quote Engine acts as an intelligent bridge between GoHighLevel and Jobber, facilitating seamless data transfer and quote generation. It ensures information flows smoothly in both directions while maintaining accuracy and consistency across both platforms.
        </p>
      </div>

      {/* Bridge Visualization */}
      <div className="rounded-lg border border-border bg-card/60 p-8 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-card/50">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-foreground">How It Works</h2>
          <p className="text-sm text-muted-foreground">
            The Node Quote Engine sits between GoHighLevel and Jobber, transferring information and generating quotes.
          </p>
        </div>

        {/* Bridge Flow */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* GHL Side */}
          <div className="flex flex-1 flex-col items-center">
            <div className="mb-4 rounded-lg border-2 border-purple-500 bg-purple-500/10 p-6 text-center">
              <div className="mb-2 text-xs font-semibold uppercase text-purple-300">GoHighLevel</div>
              <div className="text-sm text-muted-foreground">
                Sales collects lead details and notes
              </div>
            </div>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="rounded bg-card/50 p-2 text-center">Lead Information</div>
              <div className="rounded bg-card/50 p-2 text-center">Customer Notes</div>
              <div className="rounded bg-card/50 p-2 text-center">Service Details</div>
            </div>
          </div>

          {/* Bridge/Arrow */}
          <div className="flex flex-col items-center gap-2">
            <ArrowRight className="h-8 w-8 rotate-90 text-cyan-400 md:rotate-0" />
            <div className="rounded-lg border-2 border-cyan-500 bg-cyan-500/10 px-6 py-4 text-center">
              <Cpu className="mx-auto mb-2 h-8 w-8 text-cyan-300" />
              <div className="text-xs font-semibold uppercase text-cyan-300">Node Quote Engine</div>
              <div className="mt-2 text-xs text-muted-foreground">
                Processes & Transforms Data
              </div>
            </div>
            <ArrowRight className="h-8 w-8 rotate-90 text-cyan-400 md:rotate-0" />
          </div>

          {/* Jobber Side */}
          <div className="flex flex-1 flex-col items-center">
            <div className="mb-4 rounded-lg border-2 border-orange-500 bg-orange-500/10 p-6 text-center">
              <div className="mb-2 text-xs font-semibold uppercase text-orange-300">Jobber</div>
              <div className="text-sm text-muted-foreground">
                Receives formatted quote requests
              </div>
            </div>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="rounded bg-card/50 p-2 text-center">Quote Ready</div>
              <div className="rounded bg-card/50 p-2 text-center">Job Details</div>
              <div className="rounded bg-card/50 p-2 text-center">Status Updates</div>
            </div>
          </div>
        </div>

        {/* Reverse Flow */}
        <div className="mt-8 flex items-center justify-center gap-4 border-t border-border pt-6">
          <div className="text-xs text-muted-foreground">Jobber Status Updates</div>
          <ArrowRight className="h-6 w-6 text-cyan-400" />
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-xs text-cyan-300">
            Syncs Back to GHL
          </div>
          <ArrowRight className="h-6 w-6 text-cyan-400" />
          <div className="text-xs text-muted-foreground">GHL Pipeline Updated</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Quote Generation"
          description="When sales clicks 'Pull Quotes' in GoHighLevel, the Node Quote Engine analyzes the lead's notes, conversation history, and service requirements to generate multiple quote options. This helps sales make faster, more informed decisions while maintaining control over the final quote selection."
          accent="blue"
          icon={Cpu}
        />

        <ExplanationCard
          title="Data Bridge"
          description="The engine transforms lead information from GoHighLevel into the structured format Jobber needs. It ensures all customer details, service requirements, and notes are accurately transferred, eliminating manual data entry and reducing errors."
          accent="cyan"
          icon={ArrowRight}
        />

        <ExplanationCard
          title="Quote History & Analytics"
          description="All quotes are stored in a dedicated database, creating a comprehensive record of pricing decisions. This historical data helps identify patterns, improve future quotes, and provides valuable insights for business decisions."
          accent="blue"
          icon={Database}
        />

        <ExplanationCard
          title="Mismatch Detection"
          description="The system compares quotes generated by sales against quotes created by technicians in Jobber. If there's a significant difference, it alerts the team to review and ensure consistency, helping maintain pricing accuracy across the organization."
          accent="yellow"
          icon={AlertTriangle}
        />
      </div>
    </div>
  );
}
