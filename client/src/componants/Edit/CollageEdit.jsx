import React, { useEffect, useState } from "react";
import "../Form/CollageForm.css";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CollageEdit = () => {
    const {id} = useParams();
    const navigation = useNavigate();
  
    const [collageData , setCollageData] = useState({
        name : '',
        location : "",
        email : ""
    });
    const handleChange = (e) =>{
        setCollageData({...collageData , [e.target.name] : e.target.value})
    }
    useEffect(() => {
        const fetchCity = async () => {
          const response = await axios.get(`http://localhost:8080/api/collage/${id}`);
          console.log(response.data);
          if (response.data.success) {
            toast.error(response.data.Massage);
          }
          setCollageData(response.data);
        };
        fetchCity();
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .put(`http://localhost:8080/api/edit/${id}`, collageData)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success(res.data.Message);
            }
            navigation('/')
            setCollageData({ name: "", email: "", location: "" });
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
          <Link to="/">Back</Link>
        </div>
        <div className="title">Edit Collage</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Collage Name</span>
              <input type="text" placeholder="E.g: John Smith" onChange={handleChange} required  value = {collageData.name} name="name" />
            </div>
            <div className="input__box">
              <span className="details">Collage Email</span>
              <input
                type="email"
                placeholder="johnsmith@hotmail.com"
                required value = {collageData.email}
                name="email" onChange={handleChange}
              />
            </div>
            <div className="input__box">
              <span className="details">Collage Address</span>
              <input type="text" placeholder="city" required  value = {collageData.location} name="location" onChange={handleChange}/>
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

export default CollageEdit;
