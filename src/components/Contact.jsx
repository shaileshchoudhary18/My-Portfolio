import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      setSuccessMessage("");
      return;
    }

    // Proceed with form submission using Getform
    fetch("https://getform.io/f/placeYourEndpointHere", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {
        setSuccessMessage("Message Sent! 😊");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" }); 
      })
      .catch(() => {
        setErrorMessage("Something went wrong! Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I'm Shailesh Bhushan Choudhary, a Frontend Developer and QA Analyst. I specialize in building responsive, user-friendly websites and ensuring top-notch software quality
                through thorough manual and automated testing.
                With expertise in modern web technologies, I create seamless experiences and deliver high-quality, bug-free applications. Let's connect and build something great together!
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              {/* Add floating animation using Framer Motion */}
              <motion.div
                className="bg-gray-800/40 p-4 rounded-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/40 p-5 rounded-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  4 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Months of experience</span>
                </p>
              </motion.div>
            </div>
          </div>

          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              value={formData.name}
              onChange={handleChange} // Ensure onChange is updating state
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              value={formData.email}
              onChange={handleChange} // Ensure onChange is updating state
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              value={formData.message}  // Correct value binding for message
              onChange={handleChange}   // Correct onChange binding
              className="mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>

          {/* Show success or error message */}
          {successMessage && (
            <div className="mt-4 text-blue-500 text-lg font-semibold">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mt-4 text-blue-500 text-lg font-semibold">
              {errorMessage}
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
