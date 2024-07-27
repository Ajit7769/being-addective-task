import React, { useEffect, useState } from "react";
import "./Collage.css";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Courses = () => {

    const { id } = useParams();
    const [courseData, setCourseData] = useState([]);
  
    useEffect(() => {
        const fetchCity = async () => {
          const response = await axios.get("http://localhost:8080/api/allcourse");
          console.log(response.data);
          if (response.data.status) {
            toast.error(response.data.Massage);
          }
          setCourseData(response.data.courseData);
        };
        fetchCity();
      }, []);
  
    const deleteCourse = async (courseId) =>{
      await axios.delete(`http://localhost:8080/api/course-delete/${courseId}`)
      .then((response) =>{
        setCourseData((prevClg) => prevClg.filter((clg) => clg._id !== courseId));
          toast.success(response.data.Message)
      }).catch((err) =>{
          toast.error(err.Message)
      })
        
    }
  

  return (
    <>
      <div className="container">
        <h1>Course List</h1>
        <table className="rwd-table">
          <thead>
            <tr>
            <th>SR.NO</th>
              <th>Course Name</th>
              <th>Course Price</th>
              <th>Course Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((items, index) => {
              return (
                <>
                  <tr key={items._id}>
                  <td data-th="Supplier Code" key={index +1}>{index +1}</td>
                    <td data-th="Supplier Code">{items.name}</td>
                    <td data-th="Supplier Name">{items.price}</td>
                    <td data-th="Invoice Number">{items.description}</td>
                    {/* <td data-th="Invoice Date">
                      <div className="add-course-btn">
                        <Link to={`/collage/${items._id}/course`} className="button">
                          Add Course <CiSquarePlus className="nav-icons" />
                        </Link>
                      </div>
                    </td> */}
                    <td data-th="Due Date">
                      <div className="action-btn ">
                        <Link to={`/course-edit/${items._id}`} className="button">
                          <FaRegEdit className="nav-icons-green" />
                        </Link>
                        <button className="button" onClick={() => deleteCourse(items._id)}>
                          <MdDeleteOutline className="nav-icons-red" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Courses