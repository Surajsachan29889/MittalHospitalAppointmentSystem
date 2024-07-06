import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
         `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/getAllDoctors`,

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      {!user?.isDoctor?(
        <>
      <h1 className="text-center text-[3vw] font-bold"><span className="text-pri">D</span>octors</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
        </>
    ):(<div className="flex flex-col gap-4 justify-center items-center h-[70vh] w-full">
    
    <h1 className="text-[3.5vw] font-bold"> <span className="text-pri">Welcome</span> To Mittal Hospital</h1>
    <button className="h-[10vh] w-[30%] bg-pri rounded-xl font-bold text-[1.5vw]" onClick={()=>{navigate('/doctor-appointments')}}>Go to Appoinmtnets</button>
    </div>)
    
    }
      
    </Layout>
  );
};

export default HomePage;
