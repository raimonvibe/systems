import Image from "next/image";
import systems from "/public/images/systems.webp";
// import books from "/public/images/books.webp";
import review from "/public/images/review.webp";
import stack from "/public/images/stack.webp";
import welcome from "/public/images/welcome.webp";
import physics from "/public/images/physics.webp";
import flashy from "/public/images/flashy.webp";


export const metadata = {
  title: 'Home | Raimonvibe',
  description: 'Welcome to Raimonvibe - Pushing the boundaries of digital innovation',
};
export default function Home() {
  return (
    <div>
       <main>
        <div className="header"></div>

        <Image
          className="common-properties common-properties-left"
          src={systems}
          alt="A peaceful office with a person working on a laptop, surrounded by abstract system diagrams and a soft, neutral color scheme."
          priority
        />
        <article>
          <div>
            <h1>About Systems</h1>
            <p>
              Hey there! Welcome to my digital playground. This page is kind of a hub for some of the projects I've been tinkering with. I'm really into systems, coding, and all that good stuff, so this is where I let those interests run wild. Think of it as a glimpse into my brain – a slightly organized glimpse, anyway.
            </p>
            <p>
              You'll find a few different things here, each with its own story. It's all a work in progress, just like me!
            </p>
          </div>
        </article>

        <div className="spacing"></div>

{/*       <div className="middle-container">
        <Image
          className="common-properties common-properties-right"
          src={books}
          alt="A minimalist workspace where a developer manages a book catalog on a web application, with bookshelves and digital elements."
        />
        <article>
          <div>
            <h1>Fullstack Books</h1>
            <p className="github">
            This project is a web application focused on managing and displaying information about books. 
            It's a good example of my interest in full-stack development and working with data. 
          </p>
          </div>
        </article>
      </div> */}

      <div className="spacing"></div>

      <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={stack}
            alt="A serene setup featuring a developer exploring technology stacks, with layered icons representing frameworks and databases."
          />
          <article>
            <div>
              <h1>Recommended Stack</h1>
              <p className="github">
                This project is all about exploring and recommending different technology stacks for web development. 
                It's a resource I'm building to help developers find the right tools for their projects. 
              </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={review}
            alt="A calm workspace with a developer reviewing code on a laptop, surrounded by soft tones and subtle tech elements."
          />
          <article>
            <h1>SaaS Code Review</h1>
            <div>
            <p className="github">
            This is a tool I'm building to help developers analyze and improve the quality of their code. It's all about catching potential problems early on so you can build more robust 
            and reliable software. 
          </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={physics}
            alt="A calm, minimal workspace with soft lighting, beige tones, and a sleek desk featuring a blank-screen computer, surrounded by warm decor and physics-inspired wall designs."
          />
          <article>
            <h1>Velocity Calculator</h1>
            <div>
            <p className="github">
            I recently worked on a project called the Velocity Calculator, designed to make calculating velocity, acceleration, and time as simple as possible. With unit flexibility and a clean interface, it saves time by handling conversions automatically.  
          </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

 
        <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={flashy}
            alt="A calm, minimalistic workspace with soft beige tones, showcasing physics-themed diagrams, organized shelves, and a clean desk with a computer displaying formulas."
       />
            <article>
            <div>
              <h1 >Physics Formulas Flashcards</h1>
              <p className="github">
              In this project, Physics Formulas Cheat Sheet, I’ve created a handy reference guide packed with essential physics formulas that are useful for students, engineers, and anyone interested in physics. The formulas are neatly categorized and presented using LaTeX, making them clear and easy to use for solving a variety of physics problems.
              </p>
            </div>
          </article>
          </div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={welcome}
            alt="A serene and minimalist workspace featuring a desk with a computer displaying abstract designs, surrounded by neutral-toned decor, bookshelves, and warm lighting for a calming atmosphere."
          /> 
        <article>
            <div>
              <h1 >So, have a look around!</h1>
              <p className="github">
                Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!
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
