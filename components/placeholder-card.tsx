interface PlaceholderCardProps {
  title: string;
  children?: React.ReactNode;
}

export function PlaceholderCard({ title, children }: PlaceholderCardProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      {children || (
        <div className="h-32 flex items-center justify-center text-slate-500">
          Content placeholder
        </div>
      )}
    </div>
  );
}
