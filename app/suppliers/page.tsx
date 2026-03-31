import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function SuppliersPage() {
  return (
    <div>
      <PageHeader
        title="Suppliers"
        description="Manage your supplier relationships"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Supplier List" />
        <PlaceholderCard title="Supplier Performance" />
        <PlaceholderCard title="Add New Supplier" />
        <PlaceholderCard title="Supplier Documents" />
      </div>
    </div>
  );
}
