// create project in database function.
const submitProject = async (project, setSuccessMsg, setErrorMsg) =>{
    const res = await fetch('/api/projects',{
      method : "POST",
      body : JSON.stringify({ project }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    const data = await res.json()
    if(data.newProject){
      setSuccessMsg("Project created successfully.")
      return data.newProject
    }else {
      return setErrorMsg("Internal server occurred.")
    }
}
// delete project in database function.
const deleteProject = async (project) =>{
    const res =  await fetch(`/api/projects/${project.id}`,{
        method : 'DELETE'
    });
    const data = await res.json();
    return data;
}

const filterProjects = (projects, setProjects, user )=>{
  const filteredProjects = projects.filter((project) =>{
    return project.user.email === user.email
  })
  return setProjects(filteredProjects);
}

// validate that both project name and project description are provided in the client side
const validateProject = (project, setErrorMsg) =>{
  if ( project.name.length >= 3 && project.description.length >= 7){
    return true 
  }else {
    setErrorMsg("All fields are required.Try again.");
    return false
  }
}
export { submitProject, deleteProject, filterProjects, validateProject };