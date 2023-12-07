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
        "bg-accent text-accent-content px-4 py-2 rounded-full text-center font-bold",
        className
      )}
    >
      {children}
    </p>
  );
}
