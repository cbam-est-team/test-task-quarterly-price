import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our support team"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Contact Form" />
        <PlaceholderCard title="Contact Information" />
        <PlaceholderCard title="FAQ" />
        <PlaceholderCard title="Support Resources" />
      </div>
    </div>
  );
}
