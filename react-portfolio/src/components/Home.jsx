import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div className='d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white'>
      <div className='text-center container px-4'>

        <img  
        src='/images/rohan.jpg'
         alt="Rohan"
         className="rounded-circle mb-3"
         style={{width: '140px',height:'140px',objectFit:'cover', border:'3px solid #fff'}}
         />


          
         
        
  
         
         
         

         <p className='text-uppercase text-info fw-semibold mb-4' style={{ letterSpacing: '2px' }}>
          Welcome to My Portfolio
        </p>
      <h1 className='display-4 fw-bold'>Hi, I'm Rohan</h1>
      <p className='lead mb-4 mt-4'>A Web Developer learning and growing every day.
         I work mainly with React for frontend and Django REST Framework for backend. 
         I’ve built some good beginner-level projects and I'm focused on improving my skills by practicing real-world problems and coding daily. 
         I’m serious, consistent, and ready to work hard. 
        I’m looking for a chance to join a team where I can learn more and contribute with whatever I know. 
          </p>

<div className='d-flex justify-content-center gap-3'>
          <Link to="/projects" className="btn btn-primary me-3">View Projects</Link>
          <a href="/resume.pdf" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>


        <footer className="bg-dark text-center text-white border-top border-secondary py-3 mt-5">
        <div className="container">
          <p className="mb-1">
            📞 <a href="tel:+919876543210" className="text-info text-decoration-none">+91 91085 62401</a> &nbsp; | &nbsp;
            📧 <a href="mailto:rohan@example.com" className="text-info text-decoration-none">rg212873@gmail.com</a>
          </p>
          <p className="mb-0">
            <a href="https://github.com/yourusername" className="text-info me-3 text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </footer>


  </div>


  </div>
  





  )
}

export default Home