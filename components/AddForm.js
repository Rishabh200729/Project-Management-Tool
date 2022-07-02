import React, { useState } from "react";
import formStyles from "../styles/AddForm.module.css";
import { submitProject, validateProject } from "../lib/utils";
import Message from "./Message";

const AddForm = ({ projects,setProjects }) => {
  const [ errorMsg , setErrorMsg ] = useState("");
  const [ successMsg , setSuccessMsg ] = useState("");
  const [name, setName ] = useState("");
  const [ description, setDesc ] = useState("");

  const handleSubmit =  (e) =>{
    e.preventDefault(); //prevent page reload

    const project = {
      name ,
      description
    }
    const isValidated = validateProject(project, setErrorMsg);

    if(isValidated){
      // create project in database and update the projects array.
      submitProject(project, setSuccessMsg, setErrorMsg).then((data)=>{
        setProjects([...projects , data]) 
      });
    }
    setTimeout(() => {
      setErrorMsg("");
      setSuccessMsg("");
    }, 3000);
  }
  return (
    <div className={formStyles.card}>
      { errorMsg && <Message msgType = "error" msg = { errorMsg } /> }
      { successMsg && <Message msgType = "success" msg = { successMsg } /> }
      <form method="POST">
        <h2>Add Project</h2>
        <input
          type="text"
          id="fname"
          name="project_name"
          placeholder="Project Name"
          value={name}
          onChange = {(e)=> setName(e.target.value)}
        />

        <textarea
          id="subject"
          name="subject"
          placeholder="Project Description"
          value = {description}
          onChange = {(e)=> setDesc(e.target.value)}
        ></textarea>

        <button onClick={ handleSubmit } type="submit" className={formStyles.form_button}>
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddForm;
