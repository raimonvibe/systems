import { Metadata } from 'next';
import Image from 'next/image';

import pre_programming from '/public/images/Pre-Programming.webp';
import html_css from '/public/images/HTML_CSS.webp';
import javascript1 from '/public/images/JavaScript1.webp';
import javascript2 from '/public/images/JavaScript2.webp';
import webdevelopment from '/public/images/WebDevelopment.webp';
import python from '/public/images/Python.webp';
import python_tableau from '/public/images/Python_Tableau.webp';
import flutter from '/public/images/Flutter.webp';
import java1 from '/public/images/Java1.webp';
import dsa from '/public/images/dsa.webp';
import assertive from '/public/images/assertive.webp';
import ai from '/public/images/ai.webp';
import criminology from '/public/images/criminology.webp';
import tensorflow from '/public/images/tensorflow.webp';
import git from '/public/images/git.webp';
import django from '/public/images/django-1.webp';
import cSharp from '/public/images/CSharp.webp';
import CSharpIntermediate from '/public/images/CSharpIntermediate.webp';
import csharpadvanced from '/public/images/csharpadvanced.webp';
import CSharpUnitTesting from '/public/images/CSharpUnitTesting.webp';
import javascript_mastery from '/public/images/javascript_mastery.webp';
import figma from '/public/images/figma.webp';

export const metadata: Metadata = {
  title: 'My Certificates',
  description: 'An overview of the certificates I have earned and the skills I have developed.',
};

const certificates = [
  {
    name: "Pre-Programming",
    description: "In this course, I learned everything necessary to start programming, including the history of technology-related topics.",
    image: pre_programming,
    link: "https://www.udemy.com/course/pre-programming-everything-you-need-to-know-before-you-code/",
    alt: "My Pre-Programming certificate.",
    position: "left"
  },
  {
    name: "HTML5 & CSS3",
    description: "In this course series, I learned HTML5 and CSS3, the foundational languages for building a website.",
    image: html_css,
    link: "https://codewithmosh.com/p/the-ultimate-html-css",
    alt: "My HTML & CSS certificate",
    position: "right"
  },
  {
    name: "JavaScript 1",
    description: "In JavaScript Part 1, I learned the basic principles of programming. This course covers fundamental principles that apply to any programming language.",
    image: javascript1,
    link: "https://codewithmosh.com/p/javascript-basics-for-beginners",
    alt: "My JavaScript 1 certificate",
    position: "left"
  },
  {
    name: "JavaScript 2",
    description: "In JavaScript Part 2, I learned more advanced programming concepts. The course content includes Object-Oriented Programming.",
    image: javascript2,
    link: "https://codewithmosh.com/p/object-oriented-programming-in-javascript",
    alt: "My JavaScript 2 certificate",
    position: "right"
  },
  {
    name: "Web Development",
    description: "In this comprehensive Web Development bootcamp, I learned how to program a website from the basics to more advanced topics. Covered subjects include developing dynamic websites with a database and authentication features.",
    image: webdevelopment,
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    alt: "My Web Development certificate",
    position: "left"
  },
  {
    name: "Python Mastery",
    description: "This course provides a complete overview of the applications that can be built using the Python programming language. Programming fundamentals, web development, and machine learning are all covered in this course.",
    image: python,
    link: "https://codewithmosh.com/p/python-programming-course-beginners",
    alt: "My Python certificate",
    position: "right"
  },
  {
    name: "Python & Tableau",
    description: "In this course, I learned how to use Python in combination with Tableau for data analysis and visualization.",
    image: python_tableau,
    link: "https://www.udemy.com/course/python-tableau/",
    alt: "My Python & Tableau certificate",
    position: "left"
  },
  {
    name: "Flutter",
    description: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.",
    image: flutter,
    link: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
    alt: "My Flutter certificate",
    position: "right"
  },
  {
    name: "Java 1",
    description: "In Java 1, I learned the basics of programming in Java. It is a powerful language, suitable for developing large applications, and runs on a virtual machine.",
    image: java1,
    link: "https://codewithmosh.com/p/ultimate-java-part-1",
    alt: "My Java 1 certificate",
    position: "left"
  },
  {
    name: "DSA",
    description: "Data Structures are ways to organize and store data, while algorithms are sets of instructions used to solve problems or perform tasks. Understanding both is crucial for designing efficient software solutions.",
    image: dsa,
    link: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
    alt: "My certificate in Data Structures & Algorithms",
    position: "right"
  },
  {
    name: "Assertiveness",
    description: "This course helped me develop assertive communication skills, which are essential in both professional and personal situations.",
    image: assertive,
    link: "https://www.udemy.com/course/assertiveness-training-course/",
    alt: "My Assertiveness certificate",
    position: "left"
  },
  {
    name: "AI",
    description: "This course provided a comprehensive introduction to Artificial Intelligence, including machine learning, neural networks, and deep learning.",
    image: ai,
    link: "https://www.udemy.com/course/artificial-intelligence-az/",
    alt: "My AI certificate",
    position: "right"
  },
  {
    name: "Criminology",
    description: "This course offered insights into the study of crime, criminal behavior, and law enforcement, which provides valuable perspectives for software development in security and compliance-related applications.",
    image: criminology,
    link: "https://www.udemy.com/course/criminology-made-easy/",
    alt: "My Criminology certificate",
    position: "left"
  },
  {
    name: "TensorFlow",
    description: "TensorFlow is an open-source software library for machine learning and artificial intelligence. In this course, I learned how to use TensorFlow for building and training machine learning models.",
    image: tensorflow,
    link: "https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/",
    alt: "My TensorFlow certificate",
    position: "right"
  },
  {
    name: "Git",
    description: "Git is a distributed version control system. In this course, I learned how to effectively use Git to manage code changes and collaborate on software projects.",
    image: git,
    link: "https://www.udemy.com/course/git-and-github-bootcamp/",
    alt: "My Git certificate",
    position: "left"
  },
  {
    name: "Django Part 1",
    description: "In the first part of the 'Ultimate Django Series,' I dove into the essentials of web development with Python and Django. I learned how to set up MySQL, manage databases with Django migrations, and use Django models for database interactions. The course offered practical exercises and insights into using Django's ORM and Admin interface, equipping me with problem-solving skills and best practices for web development.",
    image: django,
    link: "https://codewithmosh.com/p/the-ultimate-django-series",
    alt: "My certificate in Django Backend Development Part 1",
    position: "right"
  },
  {
    name: "C#",
    description: "After completing the 'C# Basics for Beginners' course at Code with Mosh, I gained extensive knowledge of programming with C# and the .NET Framework. I learned about primitive and reference types, operators, control flow statements, and working with data, text, and files. This course equipped me with the skills to debug and develop C# applications through hands-on exercises and practical examples, providing a solid foundation for a career in web, mobile, or game development.",
    image: cSharp,
    link: "https://codewithmosh.com/p/csharp-basics-for-beginners",
    alt: "My C# Basics certificate",
    position: "left"
  },
  {
    name: "C# Intermediate",
    description: "C# is a programming language developed by Microsoft for the .NET platform. In this course, I learned object-oriented programming, including classes, inheritance, and polymorphism.",
    image: CSharpIntermediate,
    link: "https://members.codewithmosh.com/p/object-oriented-programming-in-csharp",
    alt: "My C# Intermediate certificate",
    position: "right"
  },
  {
    name: "C# Advanced",
    description: "The 'C# Advanced' course by Mosh Hamedani dives into complex topics like generics, delegates, events, lambda expressions, extension methods, LINQ, async/await, and dynamic typing to improve coding efficiency and flexibility. This course is perfect for those looking to deepen their C# knowledge, prepare for coding interviews, or master advanced features for professional development.",
    image: csharpadvanced,
    link: "https://codewithmosh.com/p/csharp-advanced",
    alt: "My C# Advanced certificate",
    position: "left"
  },
  {
    name: "C# Unit Testing",
    description: "With the help of TestNinja in this course, I learned critical unit testing techniques in C#, including Test-Driven Development (TDD), dependency injection, and mocking frameworks. This training enhanced my ability to write clean, maintainable tests and refactor legacy code for better testability.",
    image: CSharpUnitTesting,
    link: "https://codewithmosh.com/p/unit-testing-for-csharp-developers",
    alt: "My C# Unit Testing certificate",
    position: "right"
  },
  {
    name: "JavaScript Mastery",
    description: "I completed the JavaScript Mastery course from The Code Dose, which helped refresh my memory and improve my understanding of both fundamental and advanced JavaScript concepts. This achievement gave me more confidence in using JavaScript for both front-end and back-end development.",
    image: javascript_mastery,
    link: "https://products.thecodedose.com/javascript-mastery",
    alt: "My JavaScript Mastery certificate",
    position: "left"
  },
  {
    name: "Figma",
    description: "In this course, I learned how to use Figma to create effective UX/UI designs, from concept to prototype, to improve user experiences and build visually appealing interfaces.",
    image: figma,
    link: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course",
    alt: "My UI/UX design certificate with Figma",
    position: "right"
  }
];

export default function Certificates() {
  return (
    <div>
      <main>
        {certificates.map((cert, index) => (
          <div key={index}>
            <div className="spacing"></div>
            <div className="middle-container">
              <Image
                className={`common-properties certificate-${cert.position}`}
                src={cert.image}
                alt={cert.alt}
                width={500}
                height={300}
              />
              <article>
                <div>
                  <h1 className="exclusive-text">{cert.name}</h1>
                  <p>{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`Social ${cert.position === 'right' ? 'left-align' : ''} align`}
                  >
                    {cert.name}
                  </a>
                  <div className="spacing3"></div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </main>
      <div className="spacing"></div>
    </div>
  );
}
