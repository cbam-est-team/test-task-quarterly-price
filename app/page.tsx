import { PageHeader } from "@/components/page-header"

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome to your application dashboard"
      />
      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Users" value="1,234" change="+12%" />
          <StatCard title="Active Sessions" value="56" change="+3%" />
          <StatCard title="Tasks Completed" value="892" change="+8%" />
          <StatCard title="Pending Reviews" value="23" change="-2%" />
        </div>
        <div className="mt-6 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            Recent Activity
          </h2>
          <p className="text-muted-foreground">
            This is placeholder content. Replace with your actual dashboard
            widgets and data visualizations.
          </p>
        </div>
      </main>
    </>
  )
}

function StatCard({
  title,
  value,
  change,
}: {
  title: string
  value: string
  change: string
}) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-2 text-3xl font-bold text-card-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{change} from last month</p>
    </div>
  )
}
