import React, { useEffect, useState } from "react";
import "./Collage.css";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Collage = () => {
  const { id } = useParams();
  const [collageData, setCollageData] = useState([]);

  useEffect(() => {
    const fetchCity = async () => {
      const response = await axios.get("http://localhost:8080/api/all");
      console.log(response.data);
      if (response.data.status) {
        toast.error(response.data.Massage);
      }
      setCollageData(response.data.collageData);
    };
    fetchCity();
  }, []);

  const deleteUser = async (clgId) => {
    await axios
      .delete(`http://localhost:8080/api/delete/${clgId}`)
      .then((response) => {
        setCollageData((prevClg) => prevClg.filter((clg) => clg._id !== clgId));
        toast.success(response.data.Message);
      })
      .catch((err) => {
        toast.error(err.Message);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Collage List</h1>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>SR.NO</th>
              <th>Collage Name</th>
              <th>Collage Email</th>
              <th>Collage Address</th>
              <th>Add Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collageData.map((items, index) => {
              return (
                <>
                  <tr key={items._id}>
                    <td data-th="Supplier Code" key={index + 1}>
                      {index + 1}
                    </td>
                    <td data-th="Supplier Code">{items.name}</td>
                    <td data-th="Supplier Name">{items.email}</td>
                    <td data-th="Invoice Number">{items.location}</td>
                    <td data-th="Invoice Date">
                      <div className="add-course-btn">
                        <Link
                          to={`/collage/${items._id}/course`}
                          className="button"
                        >
                          Add Course <CiSquarePlus className="nav-icons" />
                        </Link>
                      </div>
                    </td>
                    <td data-th="Due Date">
                      <div className="action-btn ">
                        <Link
                          to={`/collagedit/${items._id}`}
                          className="button"
                        >
                          <FaRegEdit className="nav-icons-green" />
                        </Link>
                        <button
                          className="button"
                          onClick={() => deleteUser(items._id)}
                        >
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
  );
};

export default Collage;
