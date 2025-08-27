import React, { useEffect, useState } from 'react'
import axios from 'axios'

const fallbackProjects = [
  {
    title: "Personal Portfolio",
    description: "A portfolio website built with React and Django REST Framework.",
    tech_stack: "React, Django, REST API",
    github_link: "https://github.com/rohan20072000/Personal-Portfolio",
  },
  {
    title: "Stock Predictions Portal",
    description: "Machine learning project to predict stock trends.",
    tech_stack: "Python, ML, React",
    github_link: "https://github.com/rohan20072000/Stock-Predictions",
  },
  {
    title: "Finance Tracker",
    description: "A Django-based app to track personal finances.",
    tech_stack: "Django, SQLite, HTML/CSS",
    github_link: "https://github.com/rohan20072000/Finance-Tracker",
  },
]

const Projects = () => {
  const [projectList, setProjectList] = useState(fallbackProjects)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setProjectList(response.data)
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
        // keep fallback projects in case of error
      })
  }, [])

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🚀 My Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text">
                  <strong>Tech Stack:</strong> {project.tech_stack}
                </p>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects


