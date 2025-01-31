import React from "react";
import Image from "next/image";
import systems from "../../public/images/systems.webp";
import books from "/public/images/books.webp";
import review from "/public/images/review.webp";
import stack from "/public/images/stack.webp";
 
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

      <div className="middle-container">
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
            The code lives on 
            <a  href="https://github.com/raimonvibe/fullstack_books" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
          </div>
        </article>
      </div>

      <div className="spacing"></div>

      <div className="middle-container">
          <Image
            className="common-properties common-properties-left"
            src={stack}
            alt="A serene setup featuring a developer exploring technology stacks, with layered icons representing frameworks and databases."
          />
          <article>
            <div>
              <h1>Recommended Stack</h1>
              <p className="github">
                This project is all about exploring and recommending different technology stacks for web development. 
                It's a resource I'm building to help developers find the right tools for their projects. 
                You can find the code on <a href="https://github.com/raimonvibe/Recommended-Stack" target="_blank" rel="noopener noreferrer">GitHub</a>.
              </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={review}
            alt="A calm workspace with a developer reviewing code on a laptop, surrounded by soft tones and subtle tech elements."
          />
          <article>
            <h1>SaaS Code Review</h1>
            <div>
            <p className="github">
            SaaS Code Review: This is a tool I'm building to help developers analyze and improve the quality of their code. It's all about catching potential problems early on so you can build more robust 
            and reliable software. You can check out the code on 
            <a className="github" href="https://github.com/raimonvibe/saas_code_review" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
            </div>
          </article>
        </div>

        <div className="spacing"></div>


        <div className="middle-container">
 
        <article>
            <div>
              <h1 className="centre">So, have a look around!</h1>
              <p className="centre">
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
