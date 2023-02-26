import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer >
      <motion.div initial={{ y: "100%" }} whileInView={{ y: 0, transition:{delay:0.2} }}>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @vinaykamboj</strong>
      </motion.div>

      <motion.aside initial={{ y: "100%" }} whileInView={{ y: 0, transition:{delay:0.2} }}>
        <h4>Follow Us</h4>

        <a href="https://instagram.com/vinay_choudhary12">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vinay-kamboj-523667202/">
          <AiFillLinkedin />
        </a>
      </motion.aside>
    </footer>
  );
};

export default Footer;
