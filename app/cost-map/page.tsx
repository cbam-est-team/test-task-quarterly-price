import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function CostMapPage() {
  return (
    <div>
      <PageHeader
        title="Cost Map"
        description="Visualize costs across regions and categories"
      />
      <div className="grid grid-cols-1 gap-6">
        <PlaceholderCard title="Geographic Cost Map" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlaceholderCard title="Regional Breakdown" />
          <PlaceholderCard title="Cost by Product" />
        </div>
      </div>
    </div>
  );
}
