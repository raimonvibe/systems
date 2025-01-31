'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

interface Dropdown11Props {
  links: NavLink[];
}

const Dropdown11: React.FC<Dropdown11Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown11">
      <h1 className="menu-button" onClick={toggleDropdown}>
        Menu
      </h1>
      {isOpen && (
        <ul className="dropdown11-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
                className="footer-link footer-link2"
                onClick={toggleDropdown}
                style={{
                  display: 'block',
                  padding: '10px',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown11;