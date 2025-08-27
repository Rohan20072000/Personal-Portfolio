import React from "react";

const Resume = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">My Resume</h2>
        <p className="text-muted">A quick overview of my education & skills</p>
        <a href="/Rohan_Resume_.pdf" download className="btn btn-success btn-lg shadow-sm">
          📄 Download Resume
        </a>
      </div>

      {/* Resume Layout */}
      <div className="row">
        {/* Left Column */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-light">
            <h4 className="fw-bold text-primary">Rohan Gaikwad</h4>
            <p className="text-muted">React | Django | Data Science</p>
            <hr />
            <h5 className="fw-bold">Contact</h5>
            <p>Email: rg212873@gmail.com</p>
            <p>Phone: 9108562401</p>
            <p>Location: Gulbarga, India</p>
            <hr />
            <h5 className="fw-bold">Skills</h5>
            <ul className="list-unstyled">
              <li>✅ React</li>
              <li>✅ Django / DRF</li>
              <li>✅ Python</li>
              <li>✅ SQL</li>
              <li>✅ Data Structures</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-8">
          <div className="p-4 shadow rounded mb-4 bg-white">
            <h5 className="fw-bold text-primary">Education</h5>
            <p><strong>B.Tech, IIIT Dharwad</strong> – 2024</p>
          </div>

          <div className="p-4 shadow rounded mb-4 bg-white">
            <h5 className="fw-bold text-primary">Projects</h5>
            <ul>
              <li><strong>Personal Portfolio</strong> – React + Django</li>
            
              <li><strong>Finance Tracker</strong> – Django MVT</li>
              <li><strong>Employee Management System</strong> – Django MVT</li>
             
            </ul>
          </div>

          <div className="p-4 shadow rounded bg-white">
            <h5 className="fw-bold text-primary">Career Objective</h5>
            <p>
              Passionate about building real-world applications with 
              React, Django, and Data Science. 
              My goal is to contribute to impactful projects while 
              continuously learning and growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
