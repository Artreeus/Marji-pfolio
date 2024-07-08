import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Enter your Name");
    } else if (email === "") {
      setErrMsg("Enter your Email");
    } else if (message === "") {
      setErrMsg("Enter your Messages");
    } else {
      setSuccessMsg(
        `Hello dear ${username}, Thank you for your message. Additional information will be sent to you shortly via email at ${email}`
      );
      setUsername("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000); // Clear success message after 5 seconds
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative"
    >
      <div className="w-full h-full bg-black bg-opacity-80 py-10 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl md:text-4xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-designColor" />
              <p className="text-sm md:text-base tracking-wide">Dhaka- Bangladesh</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-designColor" />
              <p className="text-sm md:text-base tracking-wide">+8801315925610</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-designColor" />
              <p className="text-sm md:text-base tracking-wide">Mehejerinmarji@gmail.com</p>
            </div>
          </div>

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-lg mx-auto text-lg md:text-xl font-semibold text-center px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full max-w-lg mx-auto flex flex-col gap-4 md:gap-10">
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder-gray-600 font-semibold outline-none border-2 focus:border-designColor duration-200"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder-gray-600 font-semibold outline-none border-2 focus:border-designColor duration-200"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Your Message"
                className="w-full text-base h-36 p-4 text-black placeholder-gray-600 font-semibold outline-none border-2 focus:border-designColor duration-200 resize-none"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wide">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="w-full md:w-44 h-12 bg-designColor text-base uppercase font-semibold tracking-wide border-2 border-transparent hover:bg-black hover:border-designColor duration-300"
              >
                Submit
              </button>
            </form>
          )}
          <div className="w-full py-6 md:py-10 bg-black flex flex-col md:flex-row px-4 md:items-center justify-between">
            <div className="text-base md:text-lg font-thin">
              <p>For project inquiries or to say 'Hello', email us at:</p>
              <p>
                <span className="font-semibold text-designColor">Mehejerinmarji@gmail.com</span>
              </p>
            </div>
            <a href="https://reactbd.com/" target="_blank" rel="noopener noreferrer">
              <p>© 2024 Mehejerin Marji . All rights reserved.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
