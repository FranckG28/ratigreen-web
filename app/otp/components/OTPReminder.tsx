export default function OTPReminder() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold">Connexion à double facteur</h3>
      <p>
        Il semblerait que vous n&apos;avez pas encore activé
        l&apos;authentification à double facteur. Elle permet de sécuriser votre
        compte.
      </p>
      <div className="flex gap-2 justify-between">
        <button className="btn btn-ghost">Plus tard</button>
        <button className="btn btn-primary">Activer</button>
      </div>
    </div>
  );
}
