import classNames from "classnames";

export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={classNames(
        "bg-accent text-accent-content text-lg px-8 py-3 rounded-full font-medium inline",
        className
      )}
    >
      {children}
    </p>
  );
}
