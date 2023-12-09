import classNames from "classnames";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "container mx-auto px-4 flex-1 items-center justify-center flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}
