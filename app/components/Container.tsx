import classNames from "classnames";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames("container mx-auto px-4", className)}>
      {children}
    </div>
  );
}
