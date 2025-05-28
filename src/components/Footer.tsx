'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faMedium,
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    const topFunction = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", scrollFunction);

    if (mybutton) {
      mybutton.style.color = "#F8F1F1";
      mybutton.addEventListener("click", topFunction);
    }

    return () => {
      window.removeEventListener("scroll", scrollFunction);
      if (mybutton) {
        mybutton.removeEventListener("click", topFunction);
      }
    };
  }, []);

  const socialLinks = [
    { href: "https://x.com/raimonvibe/", icon: faXTwitter, label: "Link to Twitter" },
    { href: "https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/", icon: faYoutube, label: "Link to YouTube", className: "footer-link2" },
    { href: "https://www.tiktok.com/@raimonvibe/", icon: faTiktok, label: "Link to TikTok" },
    { href: "https://www.instagram.com/raimonvibe/", icon: faInstagram, label: "Link to Instagram" },
    { href: "https://medium.com/@raimonvibe/", icon: faMedium, label: "Link to Medium" },
    { href: "https://github.com/raimonvibe/", icon: faGithub, label: "Link to GitHub", className: "footer-link3" },
    { href: "https://www.linkedin.com/in/raimonvibe/", icon: faLinkedin, label: "Link to LinkedIn", className: "footer-link3" },
    { href: "https://www.facebook.com/profile.php?id=61563450007849", icon: faFacebook, label: "Link to Facebook", className: "footer-link3" },
  ];

  return (
    <footer className="container-fluid">
      {socialLinks.map((link, index) => (
        <React.Fragment key={link.href}>
          {index % 2 === 0 && index !== 0 && <div className="spacing4" />}
          <Link
            href={link.href}
            className={`footer-link ${link.className || ''}`}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} size="1x" />
          </Link>
        </React.Fragment>
      ))}
      <div className="spacing4" />
      <Link
        href="/PrivacyNotice"
        className="footer-link footer-link2"
        aria-label="Link to Privacy Policy"
      >
        Privacy Notice
      </Link>
      <div className="spacing4" />
      <Link
        href="/LegalNotice"
        className="footer-link footer-link2"
        aria-label="Link to Legal Notice"
      >
        Legal Notice
      </Link>
      <p className="footer-link">
        <Link
          href="https://www.raimonvibe.com/"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Raimonvibe Homepage"
        >
          © {new Date().getFullYear()} raimonvibe
        </Link>
      </p>
      <button id="myBtn" title="Go to top">
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
