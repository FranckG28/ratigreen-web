import Link from "next/link";

export default function UserCard() {
  const auth = false;

  if (auth) {
    return (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full bg-primary"></div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Mon compte</a>
          </li>
          <li>
            <a>Se déconnecter</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <li>
        <details>
          <summary>Se connecter</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li>
              <Link href="/auth/register">S'inscrire</Link>
            </li>
            <li>
              <Link href="/auth/login">Se connecter</Link>
            </li>
          </ul>
        </details>
      </li>
    );
  }
}
