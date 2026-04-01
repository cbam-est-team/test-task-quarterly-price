import { PageHeader } from "@/components/page-header"
import { CheckSquare, Circle, Clock } from "lucide-react"

const tasks = [
  { id: 1, title: "Review application submissions", status: "todo", priority: "High" },
  { id: 2, title: "Schedule interviews for next week", status: "in-progress", priority: "Medium" },
  { id: 3, title: "Update job descriptions", status: "completed", priority: "Low" },
  { id: 4, title: "Prepare onboarding materials", status: "todo", priority: "High" },
  { id: 5, title: "Send offer letters", status: "in-progress", priority: "High" },
]

export default function TasksPage() {
  return (
    <>
      <PageHeader title="Tasks" description="Track and manage your tasks" />
      <main className="flex-1 p-6">
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 rounded-lg border bg-card p-4"
            >
              <StatusIcon status={task.status} />
              <div className="flex-1">
                <p className="font-medium text-card-foreground">{task.title}</p>
                <p className="text-sm text-muted-foreground">
                  Priority: {task.priority}
                </p>
              </div>
              <StatusLabel status={task.status} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case "completed":
      return <CheckSquare className="size-5 text-primary" />
    case "in-progress":
      return <Clock className="size-5 text-muted-foreground" />
    default:
      return <Circle className="size-5 text-muted-foreground" />
  }
}

function StatusLabel({ status }: { status: string }) {
  const labels: Record<string, string> = {
    todo: "To Do",
    "in-progress": "In Progress",
    completed: "Completed",
  }

  const getClasses = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary/10 text-primary"
      case "in-progress":
        return "bg-accent text-accent-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getClasses(status)}`}
    >
      {labels[status]}
    </span>
  )
}
