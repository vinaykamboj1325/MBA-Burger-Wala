import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import {useSelector} from "react-redux"


const Header = ({ isAuthenticated = false }) => {

  const cart = useSelector(state => state.cart);

  return (
    <nav>
      <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
      <Link to="/">< IoFastFoodOutline className="logo"/></Link>
      </motion.div>

      <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0}}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
          <span>
            {cart.CartTotalQuantity}
          </span>
        </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </motion.div>
    </nav>
  );
};

export default Header;
