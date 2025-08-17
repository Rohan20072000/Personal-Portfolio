import React, {useEffect, useState}from 'react'
import axios from 'axios'


const Projects = () => {
  const [projectList,setProjectList]= useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/projects/')
    .then(response=>setProjectList(response.data))
    .catch(error=>console.error('Error fetching projects:', error));



  },[]);




  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Projects</h2>
      {projectList.length===0? (
        <p>No projects found.</p>
      ) : (
      projectList.map((project,index)=>(
        <div key={index} className='card mb-3'>
            <div className='card-body'>
            <h5 className='card-title'>{project.title}</h5>
            <p className='card-text'>{project.description}</p>
             <p className='card-text'>
      <strong>Tech Stack:</strong> {project.tech_stack}
    </p>
            <a href={project.github_link} target='_blank' rel='noopener noreferrer'>View on GitHub</a>

</div>


        </div>

      )


      )
      
      
     ) }
      



    </div>
  )
}

export default Projects