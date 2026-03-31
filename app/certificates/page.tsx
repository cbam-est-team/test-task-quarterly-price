import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function CertificatesPage() {
  return (
    <div>
      <PageHeader
        title="Certificate Management"
        description="Manage your CBAM certificates"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Active Certificates" />
        <PlaceholderCard title="Certificate History" />
        <PlaceholderCard title="Pending Approvals" />
        <PlaceholderCard title="Certificate Actions" />
      </div>
    </div>
  );
}
