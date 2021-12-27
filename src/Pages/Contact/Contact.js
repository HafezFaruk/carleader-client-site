import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://desolate-cliffs-90588.herokuapp.com/contact", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="bg-secondary pb-5">
      <div className="contact-bg text-white py-5">
        <h1>CONTACT US</h1>
      </div>
      <div className="row row-cols-1 row-cols-xs-1 row-cols-md-2 row-cols-lg-2  g-2 g-lg-3 mt-5 mx-3">
        <div className="col text-start text-white">
          <div>
            <div className="contact-text">
              <h4>
                GOT ANY QUESTIONS?
                <span className="text-danger">___________</span>
              </h4>
              <h1>GET IN TOUCH</h1>
            </div>
            <p className="contact-text">
              CarLeader has a strong and committed sales staff with many years
              of experience satisfying our customers’ needs.
            </p>
          </div>

          <div className="contact-a">
            <span className="me-3 contact-icon">
              <BsFillGeoAltFill />
            </span>
            <div>
              <h3>LOCATION</h3>
              <p>3261 Anmoore Road Brooklyn, NY 11230</p>
            </div>
          </div>

          <div className="contact-b">
            <span className="me-3 contact-icon">
              <FaPhoneAlt />
            </span>
            <div>
              <h3>Call Center:</h3>
              <p>800-123-4567</p>
            </div>
          </div>

          <div className="contact-c">
            <span className="me-3 contact-icon">
              <FaEnvelope />
            </span>
            <div>
              <h3>E-mail:</h3>
              <p>information@youremal.com</p>
            </div>
          </div>
        </div>

        <div style={{borderRadius: '10px', paddingTop: '30px'}} className="col bg-dark px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control bg-dark mb-3"
              {...register("name")}
              placeholder="Your Name"
              required
            />
            <input
              className="form-control bg-dark mb-3"
              {...register("email")}
              placeholder="Your Email"
              required
            />
            <input
              className="form-control text-white bg-dark mb-3"
              {...register("phone")}
              placeholder="Your Phone"
              required
            />
            <input
              className="form-control bg-dark mb-3"
              {...register("subject")}
              placeholder="Subject"
              required
            />
            <textarea
              rows="7"
              className="form-control bg-dark text-white mb-3"
              {...register("message")}
              placeholder="Your Message"
              required
            />
            <input className="btn btn-danger w-100 fw-bold mb-0" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;