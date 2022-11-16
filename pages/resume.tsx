import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import Particle from "../components/Particle";
import ResumeProp from "../components/Resume";
import { Resume as resumeType } from "../typings";
import { fetchResume } from "../utils/fetchResume";

type Props = {
  resume: resumeType;
};

export default function Resume(props: Props) {
  return (
    <div className="text-white h-screen overflow-y-auto snap-y snap-mandatory z-5 flex flex-col scroll-smooth bg-gray-800">
      <div className="particle overflow-y-hidden">{/* <Particle /> */}</div>
      <Head>
        <title>Devans Portfolio</title>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap&apos;);
        </style>
      </Head>
      <Header />
      <section id="resume" className="snap-start">
        <ResumeProp resume={props.resume} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resume: resumeType = await fetchResume();
  const data: Props = {
    resume: resume,
  };
  return { props: { resume }, revalidate: 15 };
};
