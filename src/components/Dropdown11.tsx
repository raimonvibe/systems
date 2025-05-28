'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
      setFocusedIndex(0);
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdown();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % links.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + links.length) % links.length);
    } else if (e.key === 'Tab') {
      if (e.shiftKey && focusedIndex === 0) {
        closeDropdown();
        return; // Don't prevent default to allow natural tab behavior
      } else if (!e.shiftKey && focusedIndex === links.length - 1) {
        closeDropdown();
        return; // Don't prevent default to allow natural tab behavior
      }
      
      e.preventDefault(); // Prevent default only when staying within dropdown
      if (e.shiftKey) {
        setFocusedIndex((prev) => (prev - 1 + links.length) % links.length);
      } else {
        setFocusedIndex((prev) => (prev + 1) % links.length);
      }
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      e.stopPropagation();
      
      const linkElement = menuRef.current?.children[focusedIndex]?.querySelector('a') as HTMLAnchorElement;
      if (linkElement) {
        linkElement.click();
      }
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuRef.current) {
      const focusedElement = menuRef.current.children[focusedIndex]?.querySelector('a') as HTMLElement;
      focusedElement?.focus();
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
    const handleDocumentKeyDown = (e: KeyboardEvent) => {
      if (isOpen && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleDocumentKeyDown, { passive: false });
    }

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="c-dropdown">
      <button 
        ref={buttonRef}
        className="c-dropdown__trigger" 
        onClick={toggleDropdown}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Navigation Menu"
      >
        Menu
      </button>
      {isOpen && (
        <ul 
          ref={menuRef}
          className="c-dropdown__links" 
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          {links.map((link, index) => (
            <li key={link.href} className="c-dropdown__item" role="none">
              <Link 
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
                className="c-dropdown__link"
                onClick={closeDropdown}
                role="menuitem"
                aria-label={link.label}
                tabIndex={0}
                onFocus={() => setFocusedIndex(index)}
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
