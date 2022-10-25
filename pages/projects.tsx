import React from "react";
import Nav from "../src/component/Nav";
import ProjectBlock from "../src/component/ProjectBlock";
import image1 from "../public/asset/1.jpeg";
import image2 from "../public/asset/2.jpeg";
import image3 from "../public/asset/3.jpeg";
import image4 from "../public/asset/4.jpeg";

const projects = () => {
  return (
    <div className="bg-red-500 mt-40 ml-10 flex ">
      <Nav />
      <div className="project-blocks grid grid-cols-3 gap-6">
        <ProjectBlock title="Project" image={image1} />
        <ProjectBlock title="Project" image={image2} />
        <ProjectBlock title="Project" image={image3} />
        <ProjectBlock title="Project" image={image4} />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
      </div>
    </div>
  );
};

export default projects;
