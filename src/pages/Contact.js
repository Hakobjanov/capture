import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contacts</h1>
    </motion.div>
  );
};

export default Contact;
