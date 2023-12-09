import Link from "next/link";
import Container from "./components/Container";
import Ratilogo from "./components/Ratilogo";
import Balancer from "react-wrap-balancer";
import CallToLogin from "./components/CallToLogin";
import { ArrowRight, HelpCircle } from "lucide-react";
import Planet from "./components/Planet";
import ThemeReset from "./components/ThemeReset";

export default function Home() {
  return (
    <Container className="flex-col gap-6 items-center grid xl:grid-cols-2">
      <div className="flex flex-col justify-start gap-8">
        <div className="flex flex-col gap-4">
          <Ratilogo size="lg" />

          <Balancer className="max-w-prose p-2">
            Restez <span className="text-success">green</span> avec{" "}
            <span className="font-medium">Ratigreen</span> 🐀
          </Balancer>
          <Link
            href="/game"
            className="btn btn-primary btn-lg transition group hover:scale-105"
          >
            Démarrer
            <ArrowRight className="group-hover:translate-x-1 transition-all" />
          </Link>
          <a
            className="btn btn-ghost"
            href="https://youtu.be/HvRMgNuD6kI"
            target="_blank"
          >
            Comment jouer ? <HelpCircle />
          </a>
        </div>
        <CallToLogin>
          <div className="flex gap-2 items-center">
            <Link className="btn btn-secondary" href="/auth/register">
              S&apos;inscrire
            </Link>
            <Link className="btn btn-ghost" href="/auth/login">
              Se connecter
            </Link>
          </div>
        </CallToLogin>
      </div>
      <Planet className="self-center" />
      <ThemeReset />
    </Container>
  );
}
