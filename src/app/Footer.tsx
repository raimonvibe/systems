import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    // Initialize button element for 'scroll to top' functionality
    const mybutton = document.getElementById("myBtn");

    // Function to show the button when user scrolls down 20px from the top of the document
    const scrollFunction = () => {
      if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    // Function to scroll to the top of the document when the user clicks the button
    const topFunction = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Add event listener for scroll
    window.addEventListener("scroll", scrollFunction);

    // Ensure the button has the correct text color
    if (mybutton) {
      mybutton.style.color = "#F8F1F1"; // Tekstkleur

      // Add event listener for the button
      mybutton.addEventListener("click", topFunction);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      if (mybutton) {
        mybutton.removeEventListener("click", topFunction);
      }
    };
  }, []);

  return (
    <div>
      <footer className="container-fluid">
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://x.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Twitter"
        >
          <FontAwesomeIcon icon={faXTwitter} size="1x" />
        </a>
        <a
          className="footer-link footer-link2"
          href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://www.tiktok.com/@raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to TikTok"
        >
          <FontAwesomeIcon icon={faTiktok} size="1x" />
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://medium.com/@raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Medium"
        >
          <FontAwesomeIcon icon={faMedium} size="1x" />
        </a>
        <a
          className="footer-link footer-link3"
          href="https://github.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link footer-link3"
          href="https://www.linkedin.com/in/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a
          className="footer-link"
          href="https://www.facebook.com/profile.php?id=61563450007849"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <div className="spacing4"></div>
        <Link
          className="footer-link footer-link2"
          href="/PrivacyNotice"
          aria-label="Link to Privacy Policy"
        >
          Privacy Notice
        </Link>
        <div className="spacing4"></div>
        <Link
          className="footer-link footer-link2"
          href="/LegalNotice"
          aria-label="Link to Legal Notice"
        >
          Legal Notice
        </Link>
        <p className="footer-link">
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.raimonvibe.com/"
            aria-label="Link to Raimonvibe Homepage"
          >
            © {new Date().getFullYear()} raimonvibe
          </a>
        </p>
        <button id="myBtn" title="Go to top">
          Back to Top
        </button>
      </footer>
    </div>
  );
};

export default Footer;
