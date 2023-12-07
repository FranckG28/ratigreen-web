import Container from "@/app/components/Container";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Container className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-medium tracking-tight">Se connecter</h1>
      <LoginForm />
      <p className="text-base-content">
        Vous n'avez pas encore de compte ?{" "}
        <Link href={"/auth/register"}>S'inscrire</Link>
      </p>
    </Container>
  );
}
