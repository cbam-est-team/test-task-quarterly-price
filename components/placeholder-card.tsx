interface PlaceholderCardProps {
  title: string;
  children?: React.ReactNode;
}

export function PlaceholderCard({ title, children }: PlaceholderCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      {children || (
        <div className="h-32 flex items-center justify-center text-gray-400">
          Content placeholder
        </div>
      )}
    </div>
  );
}
