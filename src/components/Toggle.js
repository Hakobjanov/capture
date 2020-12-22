import React, { useState } from "react";
import { motion } from "framer-motion";
//this is a re-useable component
//for realizing Toggle logic
//children with is an object with all the content
//in which around Toggle component is wrapped

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
