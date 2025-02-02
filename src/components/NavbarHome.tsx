'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cover from "../../public/images/cover.webp";
import Dropdown11 from './Dropdown11';

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

const NavbarHome: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "https://raimonvibe.pythonanywhere.com/", label: "BookHub", target: "_blank" },
    { href: "https://raimon.pythonanywhere.com/", label: "SkillsHub", target: "_blank" },
    { href: "https://code-review.raimonvibe.com/", label: "Code Review", target: "_blank" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" aria-label="Home">
        <Image
          className="logo"
          src={cover}
          alt="Logo of my company"
          width={80}
          height={80}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </Link>
      <Dropdown11 links={navLinks} />
    </nav>
  );
};

export default NavbarHome;


