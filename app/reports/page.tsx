import { PageHeader } from "@/components/page-header"
import { FileText, TrendingUp, Users, Calendar } from "lucide-react"

const reports = [
  {
    title: "Monthly Hiring Report",
    description: "Overview of hiring metrics for the current month",
    icon: Users,
    date: "Generated: Mar 2026",
  },
  {
    title: "Pipeline Analytics",
    description: "Funnel analysis and conversion rates",
    icon: TrendingUp,
    date: "Generated: Mar 2026",
  },
  {
    title: "Time-to-Hire Report",
    description: "Average duration from application to offer",
    icon: Calendar,
    date: "Generated: Mar 2026",
  },
  {
    title: "Source Effectiveness",
    description: "Performance by recruitment channel",
    icon: FileText,
    date: "Generated: Mar 2026",
  },
]

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        description="View and generate analytics reports"
      />
      <main className="flex-1 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {reports.map((report) => (
            <div
              key={report.title}
              className="flex gap-4 rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <report.icon className="size-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">
                  {report.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {report.description}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {report.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            Quick Stats
          </h2>
          <p className="text-muted-foreground">
            This is placeholder content for charts and data visualizations.
            Replace with actual reporting components.
          </p>
        </div>
      </main>
    </>
  )
}
