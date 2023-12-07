import Container from "@/app/components/Container";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Container className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-medium tracking-tight">S'inscrire</h1>
      <form className="flex flex-col gap-2 card bg-base-200 shadow-xl p-6 w-full max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirmer le mot de passe"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Se connecter
        </button>
      </form>
      <p className="text-base-content">
        Vous avez déjà un compte ?{" "}
        <Link href={"/auth/login"}>Se connecter</Link>
      </p>
    </Container>
  );
}
