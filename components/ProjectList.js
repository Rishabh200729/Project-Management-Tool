import projectStyles from "../styles/Project.module.css";
import Project from "./Project";
import { useSession, getSession } from "next-auth/react"
import { filterProjects } from "../lib/utils"; 
import { useEffect } from "react";

const ProjectList = ({ projects, setProjects }) => {
  const { data : session , status }= useSession();
  return (
    <div className={projectStyles.grid}>
      {projects.map((project) => {
        return <Project key = { project.id } project = {project} />
      })}
    </div>
  );
};
export default ProjectList