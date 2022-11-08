import React from "react";
// import resume from "../public/resume.pdf";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className="flex h-screen flex-col mx-auto text-center items-center z-0 w-full p-10 pb-36">
      <div className="flex text-center justify-center items-center h-1/4">
        <h3 className="uppercase tracking-[20px] text-white text-2xl">
          Resume
        </h3>
      </div>

      <div className="h-3/4 w-full bg-white">
        <object
          data="resume.pdf"
          type="application/pdf"
          className="w-full h-full overflow-y-scroll z-30"
        >
          <embed src="resume.pdf" type="application/pdf" />
        </object>
      </div>
    </div>
  );
};

export default Resume;
