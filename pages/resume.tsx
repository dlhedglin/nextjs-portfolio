import Head from "next/head";
import Header from "../components/Header";
import Particle from "../components/Particle";
import ResumeProp from "../components/Resume";
export default function Resume() {
  return (
    <div className="text-white h-screen overflow-y-auto snap-y snap-mandatory z-5 flex flex-col scroll-smooth">
      <div className="particle overflow-y-hidden">
        <Particle />
      </div>
      <Head>
        <title>Devan Hedglin's Portfolio</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
        </style>
      </Head>
      <Header />
      <section id="resume" className="snap-start">
        <ResumeProp />
      </section>
    </div>
  );
}
