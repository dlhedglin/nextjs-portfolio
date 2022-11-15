import React from "react";
import { urlFor } from "../sanity";
// import resume from "../public/resume.pdf";

type Props = {
  resume: any;
};

const Resume = (props: Props) => {
  return (
    <div className="flex h-screen flex-col mx-auto text-center items-center z-0 w-full p-10 pt-24">
      <div className="h-full w-full bg-white">
        <object
          data={props.resume.fileUrl}
          type="application/pdf"
          className="w-full h-full overflow-y-scroll z-30"
        >
          <embed src={props.resume.fileUrl} type="application/pdf" />
        </object>
      </div>
    </div>
  );
};

export default Resume;
