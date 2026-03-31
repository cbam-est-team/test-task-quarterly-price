import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard & Reports"
        description="Overview of your CBAM data and reports"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PlaceholderCard title="Quarterly Overview" />
        <PlaceholderCard title="Emissions Summary" />
        <PlaceholderCard title="Recent Imports" />
        <PlaceholderCard title="Cost Trends" />
        <PlaceholderCard title="Certificates Status" />
        <PlaceholderCard title="Supplier Activity" />
      </div>
    </div>
  );
}
