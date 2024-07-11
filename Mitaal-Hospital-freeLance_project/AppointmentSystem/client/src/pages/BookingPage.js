import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { timeSlot } from "date-time-slots";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState([]);
  const [timeslot, setTimeslot] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  // Fetch doctor data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/doctor/getDoctorById`,
        { doctorId: params.doctorId }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
        const slots = timeSlot({
          starting_time: res.data.data.timings[0],
          ending_time: res.data.data.timings[1],
          duration: 15,
        });
        setTime(slots);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle booking
  const handleBooking = async (event) => {
    event.preventDefault();
    try {
      if (!date || !timeslot) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/book-appointment`,
        {
          doctorId: params.doctorId,
          doctorInfo: doctors,
          date: date,
          time: timeslot,
          name:name,
          phone:phone,
          gender:gender,
          address:address,
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <h3 className="text-[3vw] text-center font-bold">Appointment Booking</h3>
      <div className="container m-2 flex gap-[5%] justify-center text-center items-center">
        {doctors && (
          <div className="flex flex-col gap-[3vh]">
            <h4 className="text-[2.5vw]">
              Dr. {doctors.firstName} {doctors.lastName}
            </h4>
            <h4 className="text-[2.5vw]">Fees: {doctors.feesPerCunsaltation}</h4>
            <h4 className="text-[2.5vw]">
              Timings: {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}
            </h4>
            <div className="w-50">
              <div className="container w-[250%] flex">
                <form action="#" onSubmit={handleBooking}>
                  <div className="flex gap-[5%] justify-center items-center">
                    <DatePicker
                      aria-required="true"
                      className="m-2"
                      format="DD-MM-YYYY"
                      onChange={(value) => {
                        setDate(moment(value).format("DD-MM-YYYY"));
                      }}
                    />
                    <div className="select-dropdown">
                      <select
                        defaultValue=""
                        onChange={(e) => setTimeslot(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Select Time Slot
                        </option>
                        {time.map((timeslot, index) => (
                          <option key={index} value={timeslot}>
                            {timeslot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="user__details flex flex-row gap-[5%]">
                    <div className="input__box">
                      <span className="details">Full Name</span>
                      <input
                        type="text"
                        placeholder="E.g: Suraj Sachan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input__box">
                      <span className="details">Address</span>
                      <input
                        type="text"
                        placeholder="15/297 civil lines"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input__box">
                      <span className="details">Phone</span>
                      <input
                        type="tel"
                        placeholder="012-345-6789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="gender__details">
                    <input
                      type="radio"
                      name="gender"
                      id="dot-1"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                      type="radio"
                      name="gender"
                      id="dot-2"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                      type="radio"
                      name="gender"
                      id="dot-3"
                      value="Prefer not to say"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="gender__title">Gender</span>
                    <div className="category">
                      <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span>Male</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span>Female</span>
                      </label>
                      <label htmlFor="dot-3">
                        <span className="dot three"></span>
                        <span>Prefer not to say</span>
                      </label>
                    </div>
                  </div>
                  <div className="button">
                    <input type="submit" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
