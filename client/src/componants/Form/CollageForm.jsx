import React, { useState } from 'react'
import './CollageForm.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const CollageForm = () => {

    const [collage , setCollage] = useState({
        name : "",
        email : "",
        location : ""
    })

    const navigation = useNavigate();

    const handleChange = (e) =>{
        setCollage({...collage , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post("http://localhost:8080/api/add", collage)
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              toast.success(res.data.Message);
            }
            navigation('/')
            setCollage({ name: "", email: "", location: "" });
          })
          .catch((err) => {
            if (!err.data.success) {
                toast.success(err.data.Massage);
              }
            console.log(err);
          });
      };

  return (
    <>
      <div className="form-container">
      <div className="add-course-btn">
                  <Link to="/">
                    Back
                  </Link>
                </div>
  <div className="title">ADD COLLAGE</div>
  <form onSubmit={handleSubmit}>
    <div className="user__details">
      <div className="input__box">
        <span className="details">Collage Name</span>
        <input type="text" placeholder="E.g: John Smith" required  onChange={handleChange}  name='name'/>
      </div>
      <div className="input__box">
        <span className="details">Collage Email</span>
        <input type="email" placeholder="johnsmith@hotmail.com" required  onChange={handleChange} name='email'/>
      </div>
      <div className="input__box">
        <span className="details">Collage Address</span>
        <input type="text" placeholder="city" required  onChange={handleChange} name='location'/>
      </div>
    </div>
    <div className="button">
    <div className="add-course-btn">
                  <button className='button'>
                    Submit <CiSquarePlus className="nav-icons" />
                  </button>
                </div>
    </div>
  </form>
</div>
    </>
  )
}

export default CollageForm