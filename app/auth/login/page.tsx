import Container from "@/app/components/Container";
import Link from "next/link";
import LoginForm from "./LoginForm";
import CallToLogin from "@/app/components/CallToLogin";

export default function LoginPage() {
  return (
    <Container className="gap-6 grid lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-medium tracking-tight">Se connecter</h1>
        <LoginForm />
        <p className="text-base-content">
          Vous n'avez pas encore de compte ?{" "}
          <Link href={"/auth/register"} className="link link-secondary">
            S'inscrire
          </Link>
        </p>
      </div>

      <CallToLogin></CallToLogin>
    </Container>
  );
}
