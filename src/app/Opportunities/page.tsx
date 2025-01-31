import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faCartShopping, faSitemap, faLaptopCode, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Opportunities | Raimonvibe',
  description: 'Explore my professional journey and perspectives gained through engaging with renowned companies across various industries.',
};

export default function Opportunities() {
  return (
    <div>
      <main>
        <div className="middle-container2">
          <article>
            <h1>My Professional Journey and Perspectives</h1>
            <p>Throughout my career, I have gained valuable perspectives by connecting with a range of renowned companies across various industries. These opportunities have come from organizations that value innovation, technology, and creative problem-solving—qualities that align with my professional goals.</p>
            <h1>Discover the Companies I Have Engaged With:</h1>

            <section>
              <h3>
                <FontAwesomeIcon icon={faCartShopping as IconDefinition} className="opportunity-icon" /> E-commerce and Cloud-based Solutions
              </h3>
              <ul>
                <li><a className="opportunity" href="https://commercetools.com/" target="_blank" rel="noopener noreferrer">Commercetools</a></li>
                <li><a className="opportunity" href="https://payever.careers/" target="_blank" rel="noopener noreferrer">PAYEVER</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faSitemap as IconDefinition} className="opportunity-icon" /> IT Consulting and Development
              </h3>
              <ul>
                <li><a className="opportunity" href="https://www.tcs.com/careers" target="_blank" rel="noopener noreferrer">Tata Consultancy Services</a></li>
                <li><a className="opportunity" href="https://careers.cognizant.com/nl/nl" target="_blank" rel="noopener noreferrer">Cognizant</a></li>
                <li><a className="opportunity" href="https://q-logic.nl/" target="_blank" rel="noopener noreferrer">Qlogic</a></li>
                <li><a className="opportunity" href="https://www.alten.nl/" target="_blank" rel="noopener noreferrer">Alten</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faLaptopCode as IconDefinition} className="opportunity-icon" /> Cross-Platform and Mobile Development
              </h3>
              <ul>
                <li><a className="opportunity" href="https://akkodis.com/" target="_blank" rel="noopener noreferrer">Akkodis</a></li>
                <li><a className="opportunity" href="https://www.parallelconsulting.com/" target="_blank" rel="noopener noreferrer">Parallel Consulting</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faCode as IconDefinition} className="opportunity-icon" /> Talent Development and IT Services
              </h3>
              <ul>
                <li><a className="opportunity" href="https://vitas.nl/young-talent" target="_blank" rel="noopener noreferrer">VITAS Young Talent</a></li>
                <li><a className="opportunity" href="https://cloudstaff.com/" target="_blank" rel="noopener noreferrer">Cloudstaff</a></li>
              </ul>
            </section>
          </article>
        </div>

        <div className="middle-container2">
          <article>
            <p>These perspectives have helped me further develop my professional skills by gaining insights into various industries. From e-commerce to IT consulting, and from cross-platform development to talent development, these opportunities have guided me on a path of continuous learning and skill development. Each opportunity has contributed to refining my expertise and adapting to new challenges in the ever-evolving technological landscape.</p>

            <p>I am grateful for the opportunities to connect with companies that recognize my abilities and potential. These perspectives have not only fostered my professional growth but have also brought a sense of fulfillment and satisfaction. It is inspiring to collaborate with organizations that share my passion for technology and innovation, and this has brought a great deal of professional fulfillment. These opportunities have enabled me to make meaningful contributions while growing alongside leading companies in the industry.</p>

            <p>The environment shaped by these perspectives is one of dynamic growth and potential. As I navigated these opportunities, I encountered challenges that pushed me to innovate and think critically. The paths laid out by these companies have led me through diverse sectors, each with its own complexities and rewards. This journey has created an ecosystem of continuous improvement, where each new challenge becomes a stepping stone to further success. The diversity in these opportunities has not only enriched my skillset but has also broadened my perspective, allowing me to see the interconnectedness of different fields and how they contribute to the larger landscape of technology and development.</p>

            <p><em>Please note that while I have engaged with these companies through various opportunities, this page does not imply any formal endorsement or partnership.</em></p>

            <h2>
              <FontAwesomeIcon icon={faGlobe as IconDefinition} className="opportunity-icon" /> A Dynamic Network
            </h2>
            <p>The opportunities to apply reflect the diverse range of skills and experiences I bring to the table. I am constantly inspired by the innovations in these industries and look forward to further opportunities to contribute and grow.</p>
          </article>
        </div>
      </main>
    </div>
  );
}
