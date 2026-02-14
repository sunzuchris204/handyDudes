import { MobileScreen } from "@/components/mobile-screen";
import { ExplanationCard } from "@/components/explanation-card";
import { Bell, CheckCircle, MapPin, Camera, FileText, CheckCircle2 } from "lucide-react";

export default function TechnicianWorkflowPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Technician Workflow
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Technicians do not use GHL. All assigned jobs, schedules, notes, and photos appear directly in Jobber. Technicians continue using the familiar Jobber mobile app.
        </p>
      </div>

      {/* Step 1: Job Assigned */}
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="mb-6 text-center">
          <div className="mb-2 inline-block rounded-full bg-[#ef4444] px-4 py-1.5 text-xs font-bold text-white">
            TECHNICIAN JOB LIFECYCLE
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Technician receives the job in Jobber, reviews details, performs the work, marks the job complete, and the system automatically syncs updates to GHL, triggering invoice creation and customer satisfaction survey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <MobileScreen>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-lg font-bold">Jobber</h2>
                <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              </div>

              {/* Notification */}
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-500/20">
                <div className="mb-2 flex items-center gap-2">
                  <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold">New Job Assigned</span>
                </div>
                <div className="text-xs text-muted-foreground">Just now</div>
              </div>

              {/* Job Card */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">Plumbing Repair</h3>
                    <p className="text-sm text-muted-foreground">Job #1234</p>
                  </div>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/20 dark:text-orange-400">
                    Scheduled
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <span className="font-medium">John Doe</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>123 Main St, City</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>Quote: $250</span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  View Details
                </button>
              </div>
            </div>
          </MobileScreen>
          <MobileScreen>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-lg font-bold">Job Details</h2>
                <button className="text-sm text-blue-600 dark:text-blue-400">Back</button>
              </div>

              {/* Job Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="mb-1 font-bold">Plumbing Repair</h3>
                  <p className="text-sm text-muted-foreground">Job #1234</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  <div className="mb-2 text-xs font-semibold text-muted-foreground">CUSTOMER</div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  <div className="mb-2 text-xs font-semibold text-muted-foreground">LOCATION</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">123 Main St, City, ST 12345</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  <div className="mb-2 text-xs font-semibold text-muted-foreground">QUOTE</div>
                  <div className="text-sm">
                    <div>• Fix leaky faucet - $150</div>
                    <div>• Replace pipe - $100</div>
                    <div className="mt-2 border-t border-border pt-2 font-bold">Total: $250</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </button>
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium">
                    <Camera className="h-4 w-4" />
                    Add Photos
                  </button>
                </div>
              </div>
            </div>
          </MobileScreen>

          <MobileScreen>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-lg font-bold">Complete Job</h2>
              </div>

              {/* Completion Success */}
              <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-500/20">
                <CheckCircle2 className="mx-auto mb-2 h-12 w-12 text-green-600 dark:text-green-400" />
                <div className="font-bold">Work Completed</div>
                <div className="text-xs text-muted-foreground">Ready to sync and notify customer</div>
              </div>

              {/* Notes */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">
                  Completion Notes
                </label>
                <textarea
                  className="w-full rounded-lg border border-border bg-background p-2 text-sm"
                  rows={3}
                  placeholder="Work completed successfully. Replaced pipe and fixed faucet."
                ></textarea>
              </div>

              {/* Photos */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">
                  Photos (2)
                </label>
                <div className="flex gap-2">
                  <div className="h-16 w-16 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-16 w-16 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-border">
                    <Camera className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Auto Sync Feedback */}
              <div className="space-y-2">
                <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-500/20">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold">Syncing to GoHighLevel...</span>
                  </div>
                  <div className="text-xs text-muted-foreground">✓ Status updated</div>
                </div>

                <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-500/20">
                  <div className="mb-2 text-xs font-semibold">Auto Actions Triggered</div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>✓ Invoice generated</div>
                    <div>✓ Satisfaction survey sent</div>
                    <div>✓ Customer notified</div>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-bold text-white">
                MARK JOB COMPLETE
              </button>
            </div>
          </MobileScreen>

        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ExplanationCard
          title="Jobber Mobile App"
          description="Technicians use Jobber only, not GHL."
          accent="blue"
          icon={Bell}
          responsibilities={[
            "Receive job assignments and schedules",
            "Access customer info, quotes, and notes",
            "Update job status and upload photos",
            "Mark jobs complete in Jobber",
          ]}
        />

        <ExplanationCard
          title="Automatic Sync"
          description="Job completion in Jobber triggers GHL actions."
          accent="green"
          icon={CheckCircle}
          responsibilities={[
            "Job marked complete syncs to GHL",
            "GHL automatically sends satisfaction survey",
            "Survey feedback recorded on opportunity",
          ]}
        />
      </div>
    </div>
  );
}
