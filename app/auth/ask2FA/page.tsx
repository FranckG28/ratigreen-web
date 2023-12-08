import Container from "@/app/components/Container";
import Link from "next/link";

export default function Ask2FA() {
  return (
    <Container>
      <div className="flex flex-col gap-14">
        <h1 className="text-4xl font-medium tracking-tight">
          Voulez vous activer la 2FA ?
        </h1>
        <div className="flex flex-col gap-3">
          <Link className="w-fit" href={"/auth/enable2FA"}>
            <button className="btn btn-accent">
              Oui, pour plus de sécurité
            </button>
          </Link>
          <Link className="w-fit" href={"/"}>
            <button className="btn btn-neutral">Non merci ...</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
