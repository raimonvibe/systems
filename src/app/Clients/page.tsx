import React from 'react';
import Image from 'next/image';
import collabs from "/public/images/gosolo.webp";
import techbullion from "/public/images/techbullion.webp";
import { StaticImageData } from 'next/image';

export const metadata = {
  title: 'Clients | Raimonvibe',
  description: 'View Raimon\'s client features and interviews in online magazines.',
};

interface ClientFeatureProps {
  href: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  className: string;
}

const ClientFeature: React.FC<ClientFeatureProps> = ({ href, imageSrc, imageAlt, title, description, className }) => (
  <div className="middle-container">
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <Image
        className={`common-properties ${className}`}
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={300}
      />
    </a>
    <article>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>
);

export default function Clients() {
  const clientFeatures = [
    {
      href: "https://www.collabs.io/mag/raimonvibe/",
      imageSrc: collabs,
      imageAlt: "My company in the online magazine Collabs",
      title: "Interviewed by Collabs",
      description: "I was interviewed for the online magazine Collabs. I was very surprised when I was asked to write a story about my company. Read my story by clicking on the image.",
      className: "common-properties-left"
    },
    {
      href: "https://techbullion.com/is-software-development-a-dead-end-job-after-age-35/",
      imageSrc: techbullion,
      imageAlt: "My company in the online magazine TechBullion",
      title: "Fintech Magazine TechBullion",
      description: "I am honored to share that I was recently featured in Fintech Magazine with my insights, published by TechBullion. This is an important milestone in my journey and I am grateful for the opportunity to share my knowledge. Read my story by clicking on the image.",
      className: "common-properties-right"
    }
  ];

  return (
    <div className="container">
      <main>
        {clientFeatures.map((feature, index) => (
          <React.Fragment key={index}>
            <ClientFeature {...feature} />
            {index < clientFeatures.length - 1 && <div className="spacing"></div>}
          </React.Fragment>
        ))}
      </main>
      <div className="spacing"></div>
    </div>
  );
}
