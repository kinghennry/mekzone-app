import React from "react";
const GoogleMap = () => {
  return (
    <section className="google__map">
      <div className="container">
        <div
          className="contact__mapArea aos-init aos-animate"
          data-aos="fade-up"
        >
          <iframe
            className="contact__map"
            style={{
              height: "500px",
              width: "100%",
              border: "0",
              padding: "0px 10px ",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
