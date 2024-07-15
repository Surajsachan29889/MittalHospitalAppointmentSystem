import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor,doctorimg }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-[50px]">
      <div
  class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
>
  <div
    class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
  >
      <div className="bg-pri h-[220px] rounded-lg w-[200px] flex justify-center items-center">
        <img src={doctorimg} alt="DP" className="w-[100%] h-[100%]"/>
      </div>
  </div>
  <div class="headings *:text-center *:leading-4">
    <p class="text-xl font-serif font-semibold text-[#434955]"> Dr. {doctor.firstName} {doctor.lastName}</p>
    <p class="text-sm font-semibold text-[#434955]">{doctor.specialization}</p>
  </div>
  <div class="w-full items-center justify-center flex">
    <ul
      class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3"
    >
      <li>
        <svg
          id="phone"
          viewBox="0 0 24 24"
          class="fill-stone-700 group-hover:fill-[#58b0e0]"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path
            d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
          ></path>
        </svg>
        <p>{doctor?.phone}</p>
      </li>
      <li>
        <svg
          class="fill-stone-700 group-hover:fill-[#58b0e0]"
          height="15"
          width="15"
          id="mail"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
            fill="#231f20"
          ></path>
          <path
            d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
            fill="#231f20"
          ></path>
        </svg>
        <p>{doctor?.email}</p>
      </li>
      <li>
        <p><span className="font-extrabold text-pri">Experience: </span> {doctor.experience}</p>
      </li>
      <li>
        <p><span className="font-extrabold text-pri">FeesPerCunsaltation: </span> {doctor.feesPerCunsaltation}</p>
      </li>
      <li>
        <p><span className="font-extrabold text-pri">Timing: </span> {doctor.timings[0]} - {doctor.timings[1]}</p>
      </li>
    </ul>
  </div>
  <hr
    class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
  />
</div>
    </div>
  );
};

export default DoctorList;
