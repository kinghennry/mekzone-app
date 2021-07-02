import React from "react";
import { useForm } from "react-hook-form";
import "./contactform.css";
const ContactFrom = () => {
  const [formData,setFormData] = React.useState({name:"",email:"",subject:"",message:""})
  
  return (
    <div className="contact__form" data-aos="fade-up" data-aos-delay="300">
      <div className="form__container">
        <center className="form__details">
          <h2 className="header-font">Let's talk about your Project</h2>
          <p className="sub__title gray-p">
            We have made it easy for clients to reach us and get their solutions
            weaved
          </p>
        </center>
        <form
          action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
          method="POST"
        >
          <div className="form__box">
            <div className="form__input column">
              <input
                type="text"
                placeholder="Your Name *"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({name:e.target.value})}
                // ref={register({ required: "Name is required" })}
              />
              {/* {errors.name && <p>{errors.name.message}</p>} */}
            </div>

            <div className="form__input column mr">
              <input
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({email:e.target.value})}

              />
              {/* {errors.email && <p>{errors.email.message}</p>} */}
            </div>

            <div className="form__input">
              <input
                type="text"
                placeholder="Subject *"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({subject:e.target.value})}

              />
              {/* {errors.subject && <p>{errors.subject.message}</p>} */}
            </div>
            <div className="form__input ">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
              onChange={(e) => setFormData({message:e.target.value})}

                // ref={register({ required: "Message is required" })}
              ></textarea>
              {/* {errors.message && <p>{errors.message.message}</p>} */}
            </div>
            <center>
              <button disabled={!formData.name || !formData.email || !formData.subject || !formData.message} type="submit" className="form__btn">
                Submit
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
