import Container from "@/app/components/Container";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <Container className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-medium tracking-tight">S'inscrire</h1>
      <RegisterForm />
      <p className="text-base-content">
        Vous avez déjà un compte ?{" "}
        <Link href={"/auth/login"}>Se connecter</Link>
      </p>
    </Container>
  );
}
