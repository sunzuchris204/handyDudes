"use client";

interface FlowStep {
  entity: "lead" | "ghl" | "node" | "jobber" | "technician";
  step: number;
  title: string;
  description: string;
}

interface Workflow {
  title: string;
  steps: FlowStep[];
}

interface SystemFlowDiagramProps {
  workflows: Workflow[];
}

const entityColors = {
  lead: "border-red-500 text-red-300",
  ghl: "border-purple-500 text-purple-300",
  node: "border-cyan-500 text-cyan-300",
  jobber: "border-orange-500 text-orange-300",
  technician: "border-green-500 text-green-300",
};

const entityLabels = {
  lead: "Lead Source",
  ghl: "GoHighLevel",
  node: "Node Quote Engine",
  jobber: "Jobber",
  technician: "Technician",
};

export function SystemFlowDiagram({ workflows }: SystemFlowDiagramProps) {
  return (
    <div className="space-y-10">
      {/* Legend */}
      <div className="rounded-lg border border-border bg-card/60 p-4 backdrop-blur-xl supports-[backdrop-filter]:bg-card/50">
        <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">LEGEND</div>
        <div className="flex flex-wrap gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 border-2 ${entityColors.lead} bg-transparent`}></div>
            <span className="text-muted-foreground">Lead Source</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 border-2 ${entityColors.ghl} bg-transparent`}></div>
            <span className="text-muted-foreground">GoHighLevel</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 border-2 ${entityColors.node} bg-transparent`}></div>
            <span className="text-muted-foreground">Node Quote Engine</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 border-2 ${entityColors.jobber} bg-transparent`}></div>
            <span className="text-muted-foreground">Jobber</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 border-2 ${entityColors.technician} bg-transparent`}></div>
            <span className="text-muted-foreground">Technician</span>
          </div>
        </div>
      </div>

      {/* Workflows */}
      {workflows.map((workflow, workflowIndex) => (
        <div key={workflowIndex} className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">{workflow.title}</h3>

          {/* Horizontal Flow */}
          <div className="flex flex-wrap items-start gap-4 overflow-x-auto pb-4">
            {workflow.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="flex items-start gap-3">
                {/* Entity Box */}
                <div className="flex min-w-[200px] flex-col">
                  <div
                    className={`rounded border-2 bg-transparent p-4 ${entityColors[step.entity]}`}
                  >
                    <div className="mb-2 text-xs font-semibold uppercase">
                      {entityLabels[step.entity]}
                    </div>
                    <div className="mb-2 text-sm font-bold text-foreground">
                      {step.step}. {step.title}
                    </div>
                    <div className="text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {stepIndex < workflow.steps.length - 1 && (
                  <div className="flex items-center pt-4">
                    <svg
                      className="h-8 w-8 shrink-0 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
