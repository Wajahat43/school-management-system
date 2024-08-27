import Link from "next/link";
import React from "react";

const navLinks = [
  { title: "Teachers", path: "/teachers" },
  { title: "Students", path: "/students" },
  { title: "Subjects", path: "/subjects" },
  { title: "Grades", path: "/grades" },
];

function Header() {
  return (
    <header className="flex flex-col items-center justify-between gap-2 px-24 py-4 min-h-20 md:flex-row">
      <Link className="hover:scale-105" href="/">
        Home
      </Link>
      <nav className="flex flex-col justify-between gap-2 md:gap-10 md:flex-row ">
        {navLinks.map(({ title, path }) => (
          <Link key={title} className="hover:scale-105" href={path}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
