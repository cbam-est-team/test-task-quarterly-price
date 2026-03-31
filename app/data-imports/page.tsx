import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function DataImportsPage() {
  return (
    <div>
      <PageHeader
        title="Data Imports"
        description="Import and manage your data files"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Upload Data" />
        <PlaceholderCard title="Import History" />
        <PlaceholderCard title="Data Validation" />
        <PlaceholderCard title="Import Templates" />
      </div>
    </div>
  );
}
