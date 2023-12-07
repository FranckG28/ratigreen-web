import Link from "next/link";
import ThemeChanger from "./components/ThemeChanger";
import Container from "./components/Container";
import Ratilogo from "./components/Ratilogo";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    // <main className="flex flex-col justify-between min-h-screen ">
    //   <div className="self-end mr-8 mt-8 flex gap-4">
    //     <Link href="/admin">
    //       <Image
    //         src="/admin.svg"
    //         alt="Admin lock"
    //         width={30}
    //         height={30}
    //         className="transition-transform hover:scale-110 hover:opacity-80"
    //       />
    //     </Link>
    //     <Image src="/music-note.svg" alt="Music note" width={30} height={30} />
    //   </div>
    <Container className="flex flex-col gap-4 items-center justify-center">
      <ThemeChanger />

      <Ratilogo size="lg" />
      {/* </div> */}

      <Balancer className="max-w-prose p-2 text-center">
        Soyez green avec ratigreen 🐀
      </Balancer>
      <Link href="/game" className="btn btn-primary btn-lg">
        Démarrer
      </Link>
    </Container>
    // </main>
  );
}
