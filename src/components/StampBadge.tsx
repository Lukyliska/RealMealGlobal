interface StampBadgeProps {
  lines: string[];
  className?: string;
}

export function StampBadge({ lines, className = "" }: StampBadgeProps) {
  return (
    <div
      className={`relative flex aspect-square w-56 -rotate-6 items-center justify-center rounded-full border-2 border-dashed border-accent text-center sm:w-64 ${className}`}
    >
      <div className="flex flex-col gap-1.5 px-6">
        {lines.map((line, i) => (
          <span
            key={i}
            className="font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-accent sm:text-base"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
