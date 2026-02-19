import { LucideIcon } from "lucide-react";
import {
  MessageSquare,
  Zap,
  Calendar,
  Settings,
  BarChart3,
  Workflow,
  Link2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface ExplanationCardProps {
  title: string;
  description: string;
  responsibilities?: string[];
  accent?: "red" | "green" | "yellow" | "purple" | "orange" | "blue";
  icon?: LucideIcon;
  warning?: boolean;
  checkmark?: boolean;
  cross?: boolean;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  default: Settings,
  message: MessageSquare,
  zap: Zap,
  calendar: Calendar,
  chart: BarChart3,
  workflow: Workflow,
  link: Link2,
  warning: AlertTriangle,
  check: CheckCircle2,
  cross: XCircle,
};

export function ExplanationCard({
  title,
  description,
  responsibilities,
  accent = "blue",
  icon,
  warning = false,
  checkmark = false,
  cross = false,
  className = "",
}: ExplanationCardProps) {
  const IconComponent = icon || iconMap.default;
  const accentColor = accent;
  const accentClass = `accent-${accentColor}`;
  
  const borderColorMap = {
    red: "border-l-[3px] border-l-[#ef4444]",
    green: "border-l-[3px] border-l-[#22c55e]",
    yellow: "border-l-[3px] border-l-[#eab308]",
    purple: "border-l-[3px] border-l-[#a855f7]",
    orange: "border-l-[3px] border-l-[#f97316]",
    blue: "border-l-[3px] border-l-[#3b82f6]",
  };

  const iconColorMap = {
    red: "text-[#ef4444]",
    green: "text-[#22c55e]",
    yellow: "text-[#eab308]",
    purple: "text-[#a855f7]",
    orange: "text-[#f97316]",
    blue: "text-[#3b82f6]",
  };

  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 shadow-lg ${borderColorMap[accentColor]} ${className}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`${iconColorMap[accentColor]}`}>
          {warning ? (
            <AlertTriangle className="h-6 w-6" />
          ) : checkmark ? (
            <CheckCircle2 className="h-6 w-6" />
          ) : cross ? (
            <XCircle className="h-6 w-6" />
          ) : (
            <IconComponent className="h-6 w-6" />
          )}
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {responsibilities && responsibilities.length > 0 && (
        <div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={`mt-1 ${iconColorMap[accentColor]}`}>•</span>
                <span className="flex-1">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
