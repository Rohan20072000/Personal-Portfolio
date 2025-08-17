import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

<div className='container'> 
    <Link className='navbar-brand' to="/">Portfolio</Link>
     {/* Hamburger button for small screens */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse' id="navbarNav">  
        <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/projects">Projects</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/resume">Resume</Link></li>

             </ul>


    </div>






</div>
   


    



</nav>



    
  )
}

export default Navbar