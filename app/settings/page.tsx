import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Configure your account and preferences"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Profile Settings" />
        <PlaceholderCard title="Notification Preferences" />
        <PlaceholderCard title="Data & Privacy" />
        <PlaceholderCard title="Integrations" />
      </div>
    </div>
  );
}
