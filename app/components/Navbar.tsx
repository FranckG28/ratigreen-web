import { navbarLinks } from "@/navbar-links";
import Link from "next/link";
import Ratilogo from "./Ratilogo";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/50 fixed border-b border-base-200/50 backdrop-blur">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          <Ratilogo size="sm" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navbarLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
