import { PageHeader } from "@/components/page-header"

const applicants = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Interview" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Review" },
  { id: 3, name: "Carol White", email: "carol@example.com", status: "Applied" },
  { id: 4, name: "David Brown", email: "david@example.com", status: "Hired" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", status: "Rejected" },
]

export default function ApplicantsPage() {
  return (
    <>
      <PageHeader
        title="Applicants"
        description="Manage your job applicants"
      />
      <main className="flex-1 p-6">
        <div className="rounded-lg border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="border-b last:border-0 hover:bg-muted/50"
                  >
                    <td className="px-4 py-3 font-medium text-card-foreground">
                      {applicant.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {applicant.email}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={applicant.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

function StatusBadge({ status }: { status: string }) {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Hired":
        return "bg-primary/10 text-primary"
      case "Interview":
        return "bg-accent text-accent-foreground"
      case "Review":
        return "bg-muted text-muted-foreground"
      case "Rejected":
        return "bg-destructive/10 text-destructive"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusClasses(status)}`}
    >
      {status}
    </span>
  )
}
