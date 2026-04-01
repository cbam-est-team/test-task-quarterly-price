import { PageHeader } from "@/components/page-header"

const settingsSections = [
  {
    title: "General",
    description: "Basic application settings and preferences",
    items: ["Application Name", "Timezone", "Language"],
  },
  {
    title: "Notifications",
    description: "Configure email and push notification settings",
    items: ["Email Alerts", "Push Notifications", "Digest Frequency"],
  },
  {
    title: "Appearance",
    description: "Customize the look and feel of the application",
    items: ["Theme", "Sidebar Position", "Compact Mode"],
  },
  {
    title: "Integrations",
    description: "Connect with third-party services",
    items: ["Calendar Sync", "Email Provider", "HR Systems"],
  },
]

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your application settings"
      />
      <main className="flex-1 p-6">
        <div className="max-w-3xl space-y-6">
          {settingsSections.map((section) => (
            <div key={section.title} className="rounded-lg border bg-card">
              <div className="border-b p-6">
                <h2 className="text-lg font-semibold text-card-foreground">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-card-foreground">{item}</span>
                      <span className="text-sm text-muted-foreground">
                        Configure
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
