import Link from "next/Link"
import { server } from "../../../config"
import projectStyles from "../../../styles/Project.module.css";
import { deleteProject } from "../../../lib/utils";
import { useRouter } from "next/router";

const project = ({ project }) => {
  const router = useRouter();
  //  delete a project and redirect to home page
  const handleClick = (e) =>{
    e.preventDefault();
    deleteProject(project).then(()=>{
      router.push("/")
    })
  }
  return (
    <div className={ projectStyles.indi_card }>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <br />
        <button onClick={ handleClick } className= { projectStyles.delete }>Delete</button>
          <Link href="/"><button className={ projectStyles.go_back }>Go Back</button></Link>
    </div>
  )
}
// get the specific project
export async function getStaticProps(context) {
  const res = await fetch(`${server}/api/projects/${context.params.id}`)
  const project = await res.json();
    return {
    props:{
      project
    }
  }
}
export const getStaticPaths = async () =>{
  const res = await fetch(`${server}/api/projects/`)
  const projects = await res.json();
  const ids = projects.map(project => project.id);
  const paths = ids.map(id => ({params:{id :id.toString()}}))
  return {
    paths, 
    fallback:false
  }
}

export default project;