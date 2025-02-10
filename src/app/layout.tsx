import React from "react";
import { Metadata } from 'next';
import Script from 'next/script';
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Home raimonvibe',
  description: 'Discover custom-made digital artworks with Raimon, your freelance web designer and developer from West Friesland. Specialist in responsive design and master of HTML, CSS, and JavaScript. Experience a seamless digital experience, optimized for every screen - from the palm of your hand to the wide view of your desktop.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Home raimonvibe</title>
        <Script type="text/javascript" charSet="UTF-8" src="//cdn.cookie-script.com/s/bc6138fbc116438ba4c0b26d11e59b5f.js" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://systems.raimonvibe.com/" />
        <link rel="alternate" hrefLang="en" href="https://systems.raimonvibe.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to my digital playground. This page is kind of a hub for some of the projects I've been tinkering with. I'm really into systems, coding, and all that good stuff, so this is where I let those interests run wild. Think of it as a glimpse into my brain – a slightly organized glimpse, anyway."
        />
        <meta
          name="keywords"
          content="web systems, open-source projects, SaaS tools, recommended tech stacks, velocity calculator, software development, system architecture, Raimon, GitHub systems, code review tools, developer resources, tech tutorials"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Home - systems" />
        <meta property="og:description" content="Systems raimonvibe" />
        <meta
          property="og:image"
          content="https://raimonvibe.com/static/media/raimon100.37739e52106e6e1f1b12.webp"
        />
        <meta property="og:url" content="https://www.raimonvibe.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="966" />
        <meta property="og:image:height" content="1320" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - raimonvibe" />
        <meta name="twitter:description" content="Technical Researcher" />
        <meta name="twitter:image" content="https://raimonvibe.com/static/media/raimon100.37739e52106e6e1f1b12.webp" />
        <Script defer src="/static/js/main.7acc9ab3.js" />
      </head>
      <body className="body-custom">
        <NavbarHome />
        <main>{children}</main>
        <Footer />
        <Script id="heap-analytics">
          {`
            (window.heap = window.heap || []),
            (heap.load = function (e, t) {
              (window.heap.appid = e), (window.heap.config = t = t || {});
              var r = document.createElement("script");
              (r.type = "text/javascript"),
                (r.async = !0),
                (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(r, a);
              for (
                var n = function (e) {
                    return function () {
                      heap.push(
                        [e].concat(Array.prototype.slice.call(arguments, 0))
                      );
                    };
                  },
                  p = [
                    "addEventProperties",
                    "addUserProperties",
                    "clearEventProperties",
                    "identify",
                    "resetIdentity",
                    "removeEventProperty",
                    "setEventProperties",
                    "track",
                    "unsetEventProperty",
                  ],
                  o = 0;
                o < p.length;
                o++
              )
                heap[p[o]] = n(p[o]);
            });
            heap.load("2918829767");
          `}
        </Script>
      </body>
    </html>
  );
}
