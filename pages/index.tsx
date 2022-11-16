import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Particle from "../components/Particle";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import { PageInfo } from "../typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
};

export default function Home(props: Props) {
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
        <About
          about={{
            about: props.pageInfo.about,
            aboutPic: props.pageInfo.aboutPic,
          }}
        />
      </section>
      <section id="skills" className="snap-center">
        <Skills
          skills={{
            Proficient: props.pageInfo.skillsProficient,
            Novice: props.pageInfo.skillsNovice,
            Competent: props.pageInfo.skillsCompetent,
          }}
        />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={props.pageInfo.projects} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const data: Props = {
    pageInfo: pageInfo,
  };
  return { props: { pageInfo }, revalidate: 15 };
};
