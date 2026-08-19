export function GlobeVisual({ className = "" }: { className?: string }) {
  const grid = "#d0d0c6";
  return (
    <svg
      viewBox="0 0 400 400"
      className={`animate-spin-slow ${className}`}
      role="img"
      aria-label="Globe representing worldwide distribution"
    >
      <circle cx="200" cy="200" r="180" fill="none" stroke={grid} strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke={grid} strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke={grid} strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke={grid} strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke={grid} strokeWidth="1" />
      <line x1="20" y1="200" x2="380" y2="200" stroke={grid} strokeWidth="1" />
      <line x1="200" y1="20" x2="200" y2="380" stroke={grid} strokeWidth="1" />
      <circle cx="200" cy="200" r="180" fill="none" stroke="#54700a" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}
