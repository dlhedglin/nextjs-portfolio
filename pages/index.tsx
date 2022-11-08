import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Particle from "../components/Particle";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="text-white h-screen snap-y overflow-y-scroll snap-mandatory z-5 flex flex-col">
      <div className="particle">
        <Particle />
      </div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="resume" className="snap-center">
        <Resume />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </div>
  );
}
