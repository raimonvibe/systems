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
      mybutton.style.color = "#F8F1F1"; // This seems to be a default style, kept as is.
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
    { href: "https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/", icon: faYoutube, label: "Link to YouTube", className: "c-footer-link--offset-right" },
    { href: "https://www.tiktok.com/@raimonvibe/", icon: faTiktok, label: "Link to TikTok" },
    { href: "https://www.instagram.com/raimonvibe/", icon: faInstagram, label: "Link to Instagram" },
    { href: "https://medium.com/@raimonvibe/", icon: faMedium, label: "Link to Medium" },
    { href: "https://github.com/raimonvibe/", icon: faGithub, label: "Link to GitHub", className: "c-footer-link--offset-left" },
    { href: "https://www.linkedin.com/in/raimonvibe/", icon: faLinkedin, label: "Link to LinkedIn", className: "c-footer-link--offset-left" },
    { href: "https://www.facebook.com/profile.php?id=61563450007849", icon: faFacebook, label: "Link to Facebook", className: "c-footer-link--offset-left" },
  ];

  return (
    <footer className="o-container--fluid">
      <div className="c-footer-icons">
        {socialLinks.map((link, index) => (
          <React.Fragment key={link.href}>
            {index % 2 === 0 && index !== 0 && <div className="u-spacing-xs" />}
            <Link
              href={link.href}
              className={`c-social-icon ${link.className ? link.className.replace('footer-link', 'c-footer-link') : ''}`}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} size="1x" />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="u-spacing-xs" />
      <Link
        href="/PrivacyNotice"
        className="c-footer-link c-footer-link--offset-right"
        aria-label="Link to Privacy Notice"
      >
        Privacy Notice
      </Link>
      <div className="u-spacing-xs" />
      <Link
        href="/LegalNotice"
        className="c-footer-link c-footer-link--offset-left"
        aria-label="Link to Legal Notice"
      >
        Legal Notice
      </Link>
      <p className="c-copyright">
        <Link
          href="https://www.raimonvibe.com/"
          className="c-footer-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Raimonvibe Homepage"
        >
          © {new Date().getFullYear()} raimonvibe
        </Link>
      </p>
      <button id="myBtn" className="c-btn c-btn--back-to-top" title="Go to top" aria-label="Scroll back to top of page">
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
