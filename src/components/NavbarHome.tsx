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
    { href: "https://raimonvibe.pythonanywhere.com/", label: "BookHub" },
    { href: "https://raimon.pythonanywhere.com/", label: "SkillsHub" },
    { href: "https://saas-code-review.onrender.com/", label: "Code Review" },
    // { href: "/Clients", label: "Clients" },
    // { href: "/ThreeDLibrary", label: "ThreeDLibrary" },
    // { href: "/Certificates", label: "Certificates" },
    // { href: "Resume", label: "My Resume", target: "_blank" },
    // { href: "/Contact", label: "Contact" },
    { href: "/Store", label: "Webshop" }
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
