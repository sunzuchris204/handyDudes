"use client";

interface Step {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StepFlowProps {
  steps: Step[];
  title?: string;
}

export function StepFlow({ steps, title }: StepFlowProps) {
  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6">
      {title && (
        <h3 className="mb-8 text-center text-xl font-bold text-foreground">
          {title}
        </h3>
      )}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Step Label */}
            <div className="mb-4 whitespace-nowrap rounded-full bg-[hsl(var(--accent-purple))] px-4 py-1.5 text-xs font-bold text-white">
              STEP {index + 1} - {step.title}
            </div>
            
            {/* Phone Screen Mockup */}
            <div className="mb-4">
              <div className="w-[280px] rounded-[2.5rem] border-4 border-border bg-card p-2 shadow-2xl">
                <div className="rounded-[2rem] bg-background p-4 min-h-[200px]">
                  {step.content}
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="max-w-[280px] text-center text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>

            {/* Arrow (except last step) */}
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center md:flex">
                <svg
                  className="h-8 w-8 text-muted-foreground"
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
  );
}
