import React, { useEffect, useState } from "react";
import "../Form/CollageForm.css";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CourseEdit = () => {
    const {id} = useParams();
    const navigation = useNavigate();
  
    const [courseData , setcourseData] = useState({
        name : '',
        price : "",
        description : ""
    });
    const handleChange = (e) =>{
        setcourseData({...courseData , [e.target.name] : e.target.value})
    }
    useEffect(() => {
        const fetchCity = async () => {
          const response = await axios.get(`http://localhost:8080/api/course/${id}`);
          console.log(response.data);
          if (response.data.success) {
            toast.error(response.data.Massage);
          }
          setcourseData(response.data);
        };
        fetchCity();
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .put(`http://localhost:8080/api/course-edit/${id}`, courseData)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success(res.data.Message);
            }
            navigation('/')
            setcourseData({ name: "", price: "", description: "" });
          })
          .catch((err) => {
            // if (!err.data.success) {
            //     toast.success(err.data.Massage);
            //   }
            console.log(err);
          });
      };

  return (
    <>
      <div className="form-container">
        <div className="add-course-btn">
          <Link to="/">Back</Link>
        </div>
        <div className="title">Edit Course</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Collage Name</span>
              <input type="text" placeholder="E.g: John Smith" onChange={handleChange} required  value = {courseData.name} name="name" />
            </div>
            <div className="input__box">
              <span className="details">Collage Email</span>
              <input
                type="text"
                placeholder="johnsmith@hotmail.com"
                required value = {courseData.price}
                name="price" onChange={handleChange}
              />
            </div>
            <div className="input__box">
              <span className="details">Collage Address</span>
              <input type="text" placeholder="city" required  value = {courseData.description} name="description" onChange={handleChange}/>
            </div>
          </div>
          <div className="button">
            <div className="add-course-btn">
              <button className="button">
                Submit <CiSquarePlus className="nav-icons" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CourseEdit;
