import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="spacing"></div>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/PhokNIST824"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video 1"
            ></iframe>
          </div>
        </div>
        <div className="spacing"></div>

        <div className="header">
          <Image
            className="common-properties common-properties-left"
            src="/images/welcome.webp"
            alt="Illustration of technology"
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>About raimonvibe</h1>
              <p>
                About three years ago, I founded raimonvibe, a research company in the technology field, to dive deep into programming and push the boundaries of digital innovation. I&apos;ve explored a wide range of technologies, working with languages like Python, JavaScript, HTML and CSS, and Flutter Dart. Studying both frontend and backend solutions has been fascinating, aiming for seamless and efficient integration. Utilizing powerful frameworks like React, Django, and Node.js, along with database systems such as MongoDB and Mongoose, I&apos;ve been able to create robust applications.
              </p>
              <p>
                Delving into Data Science and Data Visualization has allowed me to transform complex datasets into clear, insightful visual reports. Learning to program AI with TensorFlow has opened up new possibilities to develop concepts for customized AI solutions that support intelligent, data-driven decision-making. It&apos;s amazing how these experiences not only advance my professional skills but also enhance my problem-solving abilities in everyday life. Sometimes discipline is more present on some days than others, and that&apos;s okay.
              </p>
            </div>
          </article>
        </div>
        <div className="spacing"></div>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/bSq3YELK5ww"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video 2"
            ></iframe>
          </div>
        </div>
        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src="/images/breathe.webp"
            alt="Illustration of a living room"
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>Technological Impact</h1>
              <p>
                At raimonvibe, I&apos;m not just focused on developing technology but also on understanding and innovating it. I&apos;ve extended my research initiatives to include modern server technologies like VPS (Virtual Private Servers) to host robust, scalable applications that are accessible worldwide. My skills with jQuery and deploying real-time web applications with Express have enabled me to build responsive and interactive websites that enhance the user experience.
              </p>
              <p>
                I take pride in my approach to continuous improvement and learning, where each project is an opportunity to deepen my skills and explore new technologies. My goal is always to be at the forefront of technological advancement and to share my findings and developments with the broader community, thus contributing to the evolution of the technology industry.
              </p>
            </div>
          </article>
        </div>
        <div className="spacing"></div>
      </main>

      <div className="spacing"></div>
    </div>
  );
}
