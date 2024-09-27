"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
  ];

  const pathName = usePathname();

  return (
    <header className="px-12 py-8 flex justify-between border-b border-zinc-200">
      <Image
        src="/next.svg"
        alt="logo"
        className="w-[100px]"
        width={50}
        height={50}
      />
      <ul className="flex gap-8 text-sm">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link className={pathName === link.href ? "text-zinc-800" : "text-zinc-500"} href={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
