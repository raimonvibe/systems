import { Metadata } from 'next';
import Image from "next/image";
import raimon from "/public/images/raimon100.webp"; // Importing personal image

export const metadata: Metadata = {
  title: 'About | Raimonvibe',
  description: 'Learn about Raimon and his digital journey combining technology with creativity.',
};

export default function About() {
  return (
    <div>
      <main>
        <div className="header">
          <div className="spacing2"></div>
          <Image
            className="common-properties common-properties-left2"
            src={raimon}
            alt="A selfie of Raimon"
            width={100}
            height={100}
            priority
          />
          <article>
            <div>
              <h1>Hello, I am Raimon</h1>
              <p>
              During my digital journey, I&apos;ve combined technology with creativity, creating unique designs that push the boundaries of what&apos;s possible. This positive mindset helps me realize my true potential, unhindered by the expectations of others. My challenges haven&apos;t hindered my personal and professional growth. I strongly believe that everyone, despite any obstacles, can achieve their dreams with determination and support. I greatly appreciate your understanding and interest in my story. I hope it inspires you to overcome obstacles and discover your full potential on your own journey.
              </p>

              </div>
          </article>
        </div>
      </main>
      <div className="spacing"></div>

      <div className="spacing"></div>
    </div>
  );
}

// Social media links with FontAwesome icons
// Copyright notice with dynamic year
// Button to scroll to the top of the page
