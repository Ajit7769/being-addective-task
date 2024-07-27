import React, { useState } from "react";
import "./CollageForm.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Course = () => {
    const {id} = useParams()
    const [course , setCourse] = useState({
        name : "",
        description : "",
        price : ""
    });

    const navigation = useNavigate();

    const handleChange = (e) =>{
        setCourse({...course, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post(`http://localhost:8080/api/collage/${id}/course`, course)
          .then((res) => {
            // console.log(res.data);
            if (res.data.success) {
              toast.success(res.data.Massage);
            }
            navigation('/')
            setCourse({ name: "", description: "", price: "" });
          })
          .catch((err) => {
            console.log(err);
          });
      };


  return (
    <>
      <div className="form-container">
        <div className="add-course-btn">
          <Link to="/">Back</Link>
        </div>
        <div className="title">ADD COURSE</div>
        <form onClick={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Course Name</span>
              <input type="text" placeholder="E.g: MERN Stack" required  onChange={handleChange}   name="name"/>
            </div>
            <div className="input__box">
              <span className="details">Course Price</span>
              <input
                type="text"
                placeholder="40,000"
                required onChange={handleChange} name="price"
              />
            </div>
            <div className="input__box">
              <span className="details">Description</span>
              <input type="text" placeholder="Description" required  onChange={handleChange} name="description"/>
            </div>
          </div>
          <div className="button">
            <div className="add-course-btn">
              <button className="button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Course;
