"use client";

import Modal from "../components/Modal";
import Link from "next/link";

export default function GameEnd({
  isOpen,
  points,
}: {
  isOpen: boolean;
  points: number;
}) {
  const getResult = (): React.ReactNode => {
    if (points === 0) {
      return (
        <span className="text-success">
          <span className="font-bold">Félicitations !</span>
          <br />
          Vous avez évité le réchauffement climatique !
        </span>
      );
    }

    return (
      <span className="text-error">
        Votre planète s&apos;est réchauffée de{" "}
        <span className="font-bold">{points}°C</span>. Dommage...
      </span>
    );
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col gap-4 items-center py-8">
        <h1 className="text-lg font-bold">Partie terminée</h1>
        <h3 className="text-xl text-center font-medium">{getResult()}</h3>
        <p className="text-base-content">
          Merci d&apos;avoir joué à Ratigreen !
        </p>
        <Link href="/" className="btn btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </Modal>
  );
}
