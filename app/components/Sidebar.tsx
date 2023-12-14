import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="min-h-screen ">
      <div className="p-4 min-h-full bg-base-200 text-base-content">
        <ul className="menu ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
