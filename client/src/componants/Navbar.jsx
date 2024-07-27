import React from 'react'
import './Navbar.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-main">
        <div className="nav-logo">
            <h3>Being Addedctive</h3>
        </div>
        <div className="nav-buttons">
            <div className="add-course-btn">
                <Link to='/' className='button'>Home</Link>
            </div>
            <div className="add-course-btn">
                <Link to='/create' className='button'>Add Collage <CiSquarePlus className='nav-icons'/></Link>
            </div>
            <div className="add-course-btn">
                <Link to='/course' className='button'>All Courses</Link>
            </div>
        </div>
        {/* <div className="nav-buttons">
            <div className="add-course-btn">
                <Link to='/course' className='button'>All Courses</Link>
            </div>
        </div>
        <div className="nav-buttons">
            <div className="add-course-btn">
                <Link to='/create' className='button'>Add Collage <CiSquarePlus className='nav-icons'/></Link>
            </div>
        </div> */}
        </div>
      </div>
    </>
  )
}

export default Navbar