import React, { useState, useRef } from "react";
import { toast } from "react-toastify"; // Import toast
import contactPage from "../../Assets/ContactPage.svg";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../BackToTop/BackToTop";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    // Validation
    if (!name || !email || !message) {
      toast.error("Please complete all fields before submitting.");
      setIsSuccess(false);
      return;
    }

    // EmailJS service
    emailjs
      .sendForm("service_3j3dwph", "template_8yk5771", form.current, {
        publicKey: "j6DzOEYGOWRt8lu41",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!"); // Success toast
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again."); // Error toast
          setIsSuccess(false);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contactPage">
        <h1>Contact Us</h1>
        <div className="contactContainer">
          <div className="contactImage">
            <img src={contactPage} alt="Contact Page" />
          </div>
          <div className="contactFormContainer">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className="name"
                placeholder="Your name"
                name="from_name"
              />
              <input
                type="email"
                className="email"
                placeholder="Your email"
                name="from_email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                className="msg"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
