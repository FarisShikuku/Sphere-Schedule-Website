export function AvatarGroup({ count = 3 }: { count?: number }) {
  return (
    <div className="flex -space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs border-2 border-white">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
