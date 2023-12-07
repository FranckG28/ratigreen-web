import Container from "@/app/components/Container";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-medium tracking-tight">Se connecter</h1>
      <form className="flex flex-col gap-2 card bg-base-200 shadow-xl p-6 w-full max-w-sm">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="password"
          placeholder="Mot de passe"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Se connecter
        </button>
      </form>
      <p className="text-base-content">
        Vous n'avez pas encore de compte ?{" "}
        <Link href={"/auth/register"}>S'inscrire</Link>
      </p>
    </Container>
  );
}
