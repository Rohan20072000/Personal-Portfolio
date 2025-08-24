import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Rohan";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className='d-flex align-items-center justify-content-center min-vh-100 text-white'
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Modern gradient
      }}
    >
      <div className='text-center container px-4'>

        {/* Profile Image */}
        <img  
          src='/images/Rohan_portfolio.jpg'
          alt="Rohan"
          className="rounded-circle mb-3 shadow-lg"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '4px solid #17a2b8'
          }}
        />

        {/* Animated Intro Text */}
        <p 
          className='text-uppercase fw-semibold mb-4'
          style={{ letterSpacing: '3px', color: "#17a2b8" }}
        >
          Welcome to My Portfolio
        </p>
        <h1 
          className='display-4 fw-bold mb-3'
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
          }}
        >
          {displayText}
        </h1>

        {/* About Section */}
        <p className='lead mb-4 mt-3' style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
          I’m a <strong>Web Developer & Aspiring Data Scientist</strong> with hands-on experience in 
          <strong> React</strong>, <strong>Django</strong>, and <strong>Python</strong>. 
          <br /><br />
          My journey started with web development, but I’m deeply interested in 
          <strong> Data Science & Machine Learning</strong> — applying data-driven solutions to real-world problems.  
          <br /><br />
          I believe in consistent practice, clean coding, and continuous learning. 
        </p>

        {/* Buttons */}
        <div className='d-flex justify-content-center gap-3'>
          <Link to="/projects" className="btn btn-info fw-semibold px-4 me-3 shadow-sm">View Projects</Link>
          <a href="/resume.pdf" className="btn btn-outline-light fw-semibold px-4 shadow-sm" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-white border-top border-light mt-5 pt-3">
          <div className="container">
            <p className="mb-1">
              📞 <a href="tel:+919108562401" className="text-info text-decoration-none">+91 91085 62401</a> &nbsp; | &nbsp;
              📧 <a href="mailto:rohangaikwad.ds@gmail.com" className="text-info text-decoration-none">rg212873@gmail.com</a>
            </p>
            <p className="mb-0">
              <a href="https://github.com/Rohan20072000" className="text-info me-3 text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rohan-gaikwad-b23a15237/" className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Home







