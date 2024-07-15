import React from "react";
import ContactFormEmail from "./emailtemplate";

const sendEmail = async (name, phone, address, date, time,email) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/sendemail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        address: address,
        date: date,
        time: time,
        doctorEmail:email
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.error || 'Error in sending email' };
    }
  } catch (error) {
    return { error: 'Error in sending email' };
  }
};

export default sendEmail;
