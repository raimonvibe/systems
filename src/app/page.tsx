import Image from "next/image";
import systems from "/public/images/systems.webp";
import review from "/public/images/review.webp";
import stack from "/public/images/stack.webp";
import welcome from "/public/images/welcome.webp";
import physics from "/public/images/physics.webp";
import flashy from "/public/images/flashy.webp";
import typewriter from "/public/images/typewriter.webp";
import animal from "/public/images/animal.webp";
import emf from "/public/images/emf.webp";
import tetris from "/public/images/tetris.webp";
import periodic from "/public/images/periodic.webp";


export default function Home() {
  return (
    <div>
        <main>
{/* <div className="o-header"></div>
*/}
        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={systems}
            alt="A calm office with a person working on a laptop, surrounded by abstract system diagrams and a soft, neutral color scheme."
            priority
          />
          <article>
            <div>
              <h1>About Systems</h1>
              <p className="c-paragraph">
                Hello there! Welcome to my digital playground. This page is a kind of collection point for projects I'm tinkering with. I'm really interested in systems, coding, and all that sort of stuff, so here I let those interests run wild. Think of it as a peek into my brain – a somewhat organized peek, at least.
              </p>
              <p className="c-paragraph">
                You'll find various things here, each with its own story.
              </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

{/* <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={books}
          alt="A minimalist workspace where a developer manages a book catalog on a web application, with bookshelves and digital elements."
        />
        <article>
          <div>
            <h1>Fullstack Books</h1>
            <p className="c-paragraph">
            This project is a web application focused on managing and displaying information about books.
            It's a good example of my interest in full-stack development and working with data.
            </p>
          </div>
        </article>
      </div> */}

        <div className="u-spacing"></div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={stack}
            alt="A serene setup with a developer exploring technology stacks, with layered icons representing frameworks and databases."
          />
          <article>
            <div>
              <h1>Recommended Stack</h1>
              <p className="c-paragraph">
                This project is about exploring and recommending different technology stacks for web development.
                It's a tool I'm developing to help developers find the right tools for their projects.
              </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={review}
            alt="A calm workspace with a developer reviewing code on a laptop, surrounded by soft tones and subtle tech elements."
          />
          <article>
            <h1>SaaS Code Review</h1>
            <div>
            <p className="c-paragraph">
            This is a tool I'm developing to help developers analyze and improve the quality of their code. It's all about detecting potential problems early on, so you can build more robust
            and reliable software.
            </p>
            </div>
          </article>
        </div>

        <div className="u-spacing"></div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={physics}
            alt="A calm, minimal workspace with soft lighting, beige tones, and a sleek desk with a computer showing a blank screen, surrounded by warm decor and physics-inspired wall designs."
          />
          <article>
            <h1>Speed Calculation</h1>
            <div>
            <p className="c-paragraph">
            I recently worked on a project called Speed Calculation, designed to make calculating speed, acceleration, and time as simple as possible. With flexible units and a clear interface, it saves time by automatically performing conversions.
            </p>
            </div>
          </article>
        </div>

        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={flashy}
            alt="A calm, minimalist workspace with soft beige tones, featuring physics-themed diagrams, organized shelves, and a clean desk with a computer displaying formulas."
        />
            <article>
            <div>
              <h1>Physics Formulas Flashcards</h1>
              <p className="c-paragraph">
                In this project, Physics Formulas Cheat Sheet, I've created a handy reference guide full of essential physics formulas useful for students, engineers, and anyone interested in physics. The formulas are neatly categorized and presented using LaTeX, making them clear and easy to use for solving various physics problems.
              </p>
            </div>
          </article>
          </div>

          <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-right"
            src={typewriter}
            alt="A vintage-inspired workspace with a retro typewriter, surrounded by classic design elements and soft, warm lighting."
          />
          <article>
            <div>
              <h1>Retro Typewriter Monitor</h1>
              <p className="c-paragraph">
                Dive into the charm of bygone years with our Retro Typewriter Monitor project. This unique setup combines the nostalgic feel of a vintage typewriter with the modern functionality of a quiz-based application, creating an engaging and interactive experience. It's not just about reliving the old days, but also about appreciating the journey of technology from past to present.
              </p>
            </div>
          </article>
        </div>


        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-left"
          src={animal}
          alt="A calm, minimalist workspace with soft beige tones, featuring animal-themed art, natural textures, and a computer displaying a quiz game interface."
        />
        <article>
          <div>
            <h1>Animal Riddles</h1>
            <p className="c-paragraph">
              Dive into the delightful world of Animal Riddles — an interactive quiz game that combines curiosity with play. Whether you're recognizing sounds, images, or fun clues, each challenge invites you to guess the animal behind the mystery. Designed for all ages, it's an engaging way to connect with nature and test your instincts.
            </p>
          </div>
        </article>
        </div>


        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={emf}
          alt="A stylized, minimalist visualization of a physics simulator, featuring smooth gradients and subtle textures. The interface shows sliders, a formula box, and vector arrows representing motion, field, and length."
        />
        <article>
          <div>
            <h1>Motional EMF Simulator</h1>
            <p className="c-paragraph">
              Explore the fascinating principles of electromagnetic induction with this interactive simulator. Adjust variables like displacement, magnetic field, length, and time to see how they affect the induced voltage. Great for students, educators, and curious minds wanting to visualize how motion generates electricity in a magnetic field.
            </p>
          </div>
        </article>
      </div>

          <div className="o-container-standard">
      <Image
        className="o-image-standard o-image-left"
        src={tetris}
        alt="A stylized, minimalist visualization of a Tetris game interface, in warm neutral tones. The design shows falling tetrominoes, a score panel, and level indicators, all within a calm, design-focused workspace."
      />
      <article>
        <div>
        <h1>Tetris 2.0.</h1>
        <p className="c-paragraph">
          This isn't just a game about blocks — it's about timing, space, and the quiet rhythm of decisions. In Tetris, every shape falls like a thought. You turn it, place it, and somehow it fits. Or it doesn't. But the feeling when it does — that's special. It's a calm way of thinking. For those who find peace in patterns, movement in stillness, and clarity in form.
        </p>
        </div>
      </article>
    </div>

        <div className="o-container-standard">
        <Image
          className="o-image-standard o-image-right"
          src={periodic}
          alt="An interactive periodic table displayed in warm, minimal tones. Elements are color-coded and neatly arranged, exuding a sense of calm structure and scientific beauty."
        />
        <article>
          <div>
            <h1>The Periodic Table</h1>
            <p className="c-paragraph">
              Not just rows and columns — it's a silent map of everything. Every element has a story: iron in our blood, carbon in our breath, gold in our dreams. This project gives form to that wonder. You click, you learn, and slowly you start to see the order in the chaos. It's about connection. And how everything — even us — fits into it.
            </p>
          </div>
        </article>
      </div>



        <div className="o-container-standard">
          <Image
            className="o-image-standard o-image-left"
            src={welcome}
            alt="A serene and minimalist workspace featuring a desk with a computer displaying abstract designs, surrounded by neutral-toned decor, bookshelves, and warm lighting for a calming ambiance."
          /> 
        <article>
            <div>
              <h1>So, have a look around!</h1>
              <p className="c-paragraph">
                Feel free to explore these projects and see what you think. I'm always learning and growing, and these sites are a reflection of that journey. Who knows what I'll be working on next? Stay tuned!
              </p>
            </div>
          </article>
          </div>
    

        <div className="u-spacing"></div>
      </main>

      <div className="u-spacing"></div>
    </div>
  );
}
