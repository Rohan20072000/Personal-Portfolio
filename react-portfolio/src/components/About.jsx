import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="card shadow-lg border-0 rounded-4 p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                color: "white",
              }}
            >
              <h2 className="mb-4 fw-bold text-center text-warning">
                About Me
              </h2>

              <p className="lead mb-3 text-center">
                Hi, I'm{" "}
                <span className="fw-semibold text-light">Rohan Gaikwad</span>, a
                passionate developer with a background in{" "}
                <span className="fw-bold text-success">Engineering</span>. I’m
                currently focused on mastering{" "}
                <span className="fw-bold text-info">
                  React, Django, and Data Science
                </span>
                , while building real-world applications that solve practical
                problems.
              </p>

              <hr className="border-light" />

              <motion.p
                className="mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                My journey started with curiosity for technology, which quickly
                turned into a mission to create impactful solutions. Beyond
                coding, I’m driven by continuous learning, problem-solving, and
                contributing to projects that make a difference.
              </motion.p>

              <motion.p
                className="mb-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Outside of tech, I’m a{" "}
                <span className="fw-bold text-danger">fitness enthusiast</span>{" "}
                and enjoy{" "}
                <span className="fw-bold text-warning">cinematography</span>.
                These passions shape my discipline, creativity, and unique
                perspective as a developer.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;





