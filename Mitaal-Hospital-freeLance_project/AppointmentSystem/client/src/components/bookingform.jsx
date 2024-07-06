import React from 'react';

function BookingForm({onClick}) {
  return (
    <div>
      <div className="container">
        <form action="#" onSubmit={onClick}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Full Name</span>
              <input type="text" placeholder="E.g: Suraj Sachan" required />
            </div>
            <div className="input__box">
              <span className="details">Username</span>
              <input type="text" placeholder="surajsachan01" required />
            </div>
            <div className="input__box">
              <span className="details">Email</span>
              <input type="email" placeholder="surajsachan@hotmail.com" required />
            </div>
            <div className="input__box">
              <span className="details">Phone Number</span>
              <input type="tel" placeholder="012-345-6789" required />
            </div>
            <div className="input__box">
              <span className="details">Password</span>
              <input type="password" placeholder="********" required />
            </div>
            <div className="input__box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="********" required />
            </div>
          </div>
          <div className="gender__details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
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
  );
}

export default BookingForm;
