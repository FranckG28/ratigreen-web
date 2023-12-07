import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary mt-2"
      aria-disabled={pending}
    >
      {children}
    </button>
  );
}
