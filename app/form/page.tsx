// pages/form.js
import React from "react";

const FormPage = () => {
  return (
    <div className="pt-20 overflow-y-hidden h-screen">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd4PNI0eV5qZK71GDpqSyQPOKa6oIsQfj7VnHH-XP7JvMqBQw/viewform?embedded=true"
        width="100%"
        height="1000"
        style={{ border: "none" }}
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormPage;
