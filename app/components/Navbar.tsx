import { navbarLinks } from "@/navbar-links";
import Link from "next/link";
import Ratilogo from "./Ratilogo";
import UserCard from "./UserCard";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/50 fixed border-b border-base-200/50 backdrop-blur z-40">
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
          <UserCard />
        </ul>
      </div>
    </div>
  );
}
