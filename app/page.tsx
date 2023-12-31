import Link from "next/link";
import ThemeChanger from "./components/ThemeChanger";
import Container from "./components/Container";
import Ratilogo from "./components/Ratilogo";
import Balancer from "react-wrap-balancer";
import CallToLogin from "./components/CallToLogin";
import { ArrowRight, HelpCircle } from "lucide-react";
import Planet from "./components/Planet";

export default function Home() {
  {/* gap-x needs to updated */ }
  return (
    < Container className="flex-col gap-6 gap-x-48 items-center grid xl:grid-cols-2" >
      <div className="flex flex-col justify-start gap-3">
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
        <button className="btn btn-ghost">
          Comment jouer ? <HelpCircle />
        </button>
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
        <ThemeChanger />
      </div>
      <Planet />
    </Container >
  );
}
