import React from "react";
import shaileshimg from "../assets/shaileshimg.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";
import { FaDocker, FaJava } from "react-icons/fa";
import { SiApache, SiSelenium } from "react-icons/si";
import { RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";

const Hero = () => {
  // Handle CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/shailesh_bhushan_resume.pdf"; // The path to your resume file
    link.download = "shailesh_bhushan_resume.pdf"; // The name you want for the downloaded file
    link.click(); // Trigger the download
  };

  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "QA Analyst",
              1000,
              "Frontend Developer",
              1000,
              "Enthusiastic Programmer",
              1000,
            ]}
            speed={60}
            repeat={Infinity}
            className="font-bold text-blue-300 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white md:text-4xl text-7xl tracking-tight mb-4"
          >
            HEY GUYS! I AM <br />
            <span className="font-bold text-blue-700 text-3xl">Shailesh Bhushan Choudhary</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            Frontend developer and QA analyst specializing in manual and automation testing, creating user-friendly interfaces and ensuring high-quality web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              onClick={handleDownload}  // Add the download handler here
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-blue-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-700 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/shaileshchoudhary18"  // Replace with your GitHub URL
                target="_blank"  // Open in a new tab
                rel="noopener noreferrer" // Optional: security measure when using target="_blank"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/"  // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/"  // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
  src={shaileshimg}
  className="w-[300px] md:w-[200px]"
  initial={{ opacity: 0, scale: 0.8, rotateY: 180 }} // Initial state with 180 degrees rotation (for the "flip" start)
  animate={{ opacity: 1, scale: 1, rotateY: 0 }} // Rotate back to 0 degrees (full flip effect)
  transition={{ duration: 1 }} // Flip duration
  viewport={{ once: true }} // Trigger animation only once when the element is in view
/>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        {/* <p className="text-gray-200 mr-6">My Tech Stack</p> */}
        
        {/* Animated Floating Icons */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0], // Float effect (up and down motion)
            rotate: [0, 10, -10, 0], // Slight rotation
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-orange-600 mx-2"
        >
          <DiHtml5 />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-blue-600 mx-2"
        >
          <DiCss3 />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-yellow-500 mx-2"
        >
          <DiJavascript1 />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-blue-500 mx-2"
        >
          <DiReact />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-orange-500 mx-2"
        >
          <FaJava />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-blue-500 mx-2"
        >
          <FaDocker />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-red-500 mx-2"
        >
          <SiApache />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-blue-500 mx-2"
        >
          <RiTailwindCssLine />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-green-600 mx-2"
        >
          <SiSelenium />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-white mx-2"
        >
          <DiGithubBadge />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
