import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function CostCalculatorPage() {
  return (
    <div>
      <PageHeader
        title="Cost Calculator"
        description="Calculate CBAM costs for your imports"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Calculator Form" />
        <PlaceholderCard title="Cost Breakdown" />
        <PlaceholderCard title="Saved Calculations" />
        <PlaceholderCard title="Cost Comparison" />
      </div>
    </div>
  );
}
