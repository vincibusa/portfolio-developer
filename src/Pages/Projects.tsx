import  { FC } from "react";
// import Project from "../Components/Project";
// import { projectDetails } from "../Details";

// interface ProjectDetails {
//   title: string;
//   image: string;
//   description: string;
//   techstack: string;
//   previewLink: string;
//   githubLink: string;
// }

const Projects: FC = () => {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects (Work in Progress)
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }: ProjectDetails) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div> */}
      </section>
    </main>
  );
}

export default Projects;