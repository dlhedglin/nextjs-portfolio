import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Particle from "../components/Particle";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div className="text-white h-screen overflow-y-auto snap-y snap-mandatory z-5 flex flex-col scroll-smooth bg-gray-800">
      <div className="particle overflow-y-hidden">{/* <Particle /> */}</div>
      <Head>
        <title>Devan Hedglin's Portfolio</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
        </style>
      </Head>
      <Header />
      {/* <Nav /> */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </div>
  );
}
