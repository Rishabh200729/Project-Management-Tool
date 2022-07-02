import projectStyles from "../styles/Project.module.css";
import Link from "next/Link";

const Project = ({ project }) => {
  return (
    <Link href="/project/[id]" as={`/project/${project.id}`}>
        <div className={projectStyles.card}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    </Link>
  )
}

export default Project