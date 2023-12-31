"use server";

import Link from "next/link";
import { useUser } from "../hooks/useUser";
import { logout } from "../actions/logout.action";

export default async function UserCard() {
  const publicUser = await useUser();

  if (publicUser) {
    return (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full bg-primary">
            <div className="flex justify-center items-center">
              <p className="text-3xl">{publicUser.name[0].toUpperCase()}</p>
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Mon compte</a>
          </li>
          <li>
            <form action={logout}>
              <button type="submit">Se déconnecter</button>
            </form>
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
              <Link href="/auth/register">S&apos;inscrire</Link>
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
