import classNames from "classnames";
import { Loader2 } from "lucide-react";

export default function Loader({ className }: { className?: string }) {
  return <Loader2 className={classNames("animate-spin h-5 w-5", className)} />;
}
