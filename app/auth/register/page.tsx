import Container from "@/app/components/Container";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import CallToLogin from "@/app/components/CallToLogin";

export default function RegisterPage() {
  return (
    <Container className="gap-6 grid lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium tracking-tight">S'inscrire</h1>
        <RegisterForm />
        <p className="text-base-content">
          Vous avez déjà un compte ?{" "}
          <Link href={"/auth/login"}>Se connecter</Link>
        </p>
      </div>
      <CallToLogin></CallToLogin>
    </Container>
  );
}
