interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const colorClass = value < 50 ? "bg-primary" : "bg-secondary";

  return (
    <div className="border-4 rounded-full p-2 border-white/30">
      <div
        className={`h-2 ${colorClass} rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
