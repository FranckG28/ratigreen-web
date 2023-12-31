import Balancer from "react-wrap-balancer";
import ChristmanGiftAnimation from "./CallToLoginAnimation";

export default function CallToLogin({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-secondary/30 to-accent/50 grid lg:grid-cols-2 items-center max-w-2xl mx-auto">
      <div className="flex flex-col text-left p-8">
        <h1 className="mb-5 text-3xl font-medium text-base-content">
          Participez à la discussion
        </h1>
        <Balancer className="mb-5 max-w-prose text-base-content/80">
          Connectez vous pour interagir avec la communauté Ratigreen.
        </Balancer>
        {children}
      </div>
      <ChristmanGiftAnimation />
    </div>
  );
}
