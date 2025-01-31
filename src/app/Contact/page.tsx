import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <div>
      <main>
        <div className="header">
          {/* Use Next.js Image for optimized loading */}
          <Image
            className="common-properties common-properties-left"
            src="/images/post_box.webp"
            alt="Illustration of a mailbox."
            width={500} // Adjust width
            height={300} // Adjust height
          />
          <br />
          <br />
          <article>
            <div>
              <h1>Contact</h1>
              <p>
                If you have any questions about the services I offer, please
                send me a message. I will get back to you as soon as possible.
              </p>
              <div className="spacing3"></div>
              <a className="Social" href="mailto:info@raimonvibe.com">
                Contact
              </a>
            </div>
          </article>
        </div>

        <div className="middle-container">
          {/* Use Next.js Image for optimized loading */}
          <Image
            className="common-properties common-properties-right"
            src="/images/idea.webp"
            alt="Illustration of a light bulb being screwed into a lamp shade"
            width={500} // Adjust width
            height={300} // Adjust height
          />
          <article>
            <div>
              <h1>If you have ideas.</h1>
              <p>
                Collecting feedback from clients is a way to show that I value
                their opinions. By asking my clients for feedback, I communicate
                that their opinions are important to me. I involve them in
                shaping my business, so they feel more connected to my company.
                By listening to their voices, I can build a sustainable
                connection with them.
              </p>
              <p>"We would love to hear from you."</p>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>
      </main>

      <div className="spacing"></div>
    </div>
  );
}

// Social media links with FontAwesome icons
// Copyright notice with dynamic year
// Button to scroll to the top of the page

export default Contact;
