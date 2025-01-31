import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Raimonvibe',
  description: 'View the professional resume of Raimonvibe.',
};

const resumePath = '/images/resume.pdf';

export default function Resume() {
  return (
    <div>
      <a href={resumePath} target="_blank" rel="noopener noreferrer">
        <div id="pdf-container">
          <iframe
            src={resumePath}
            title="Resume PDF"  // Voegt een titel toe voor toegankelijkheid
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            loading="lazy"
            aria-label="Raimonvibe's Resume PDF"
          ></iframe>
        </div>
      </a>
      <div className="spacing"></div>
      <div className="spacing"></div>
    </div>
  );
}
