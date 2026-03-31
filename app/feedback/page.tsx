import { PageHeader } from "@/components/page-header";
import { PlaceholderCard } from "@/components/placeholder-card";

export default function FeedbackPage() {
  return (
    <div>
      <PageHeader
        title="Feedback"
        description="Share your thoughts and suggestions"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlaceholderCard title="Feedback Form" />
        <PlaceholderCard title="Previous Feedback" />
        <PlaceholderCard title="Feature Requests" />
        <PlaceholderCard title="Rate Your Experience" />
      </div>
    </div>
  );
}
