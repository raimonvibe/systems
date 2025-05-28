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
    { href: "/Services", label: "Services" },
    { href: "/Opportunities", label: "Opportunities" },
    { href: "/About", label: "About Me" },
    { href: "/Clients", label: "Clients" },
    { href: "/ThreeDLibrary", label: "ThreeDLibrary" },
    { href: "/Certificates", label: "Certificates" },
    { href: "/resume", label: "My Resume", target: "_blank" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="o-container">
      <Link href="/" aria-label="Home">
        <Image
          className="o-logo"
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
