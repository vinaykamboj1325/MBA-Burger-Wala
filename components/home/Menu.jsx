import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux"
import { AddToCard } from '../../features/CartSlice';

const Menu = () => {
    const dispatch = useDispatch();
    const cartdata = useSelector(state => state.cart.items.products);

    const Add =(item)=>{
        dispatch(AddToCard(item))
    };

    return (
        <>
            <div className="menu">
                <div className="head">
                    <h1>Menu</h1>
                </div>

                <div className="cards">
                    <div className="cardItems">
                        {
                            cartdata?.map((item) => {
                                return <motion.div initial={{ x: "-100%", opacity: 0 }} transition={{ delay: 0.2, }} whileInView={{ x: 0, opacity: 1, animation: 'ease-in-out' }}
                                    className="card" key={item.id}>
                                    <div className="itemNo">item No:{item.id}</div>
                                    <div className="img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>₹{item.price}</p>
                                    <button onClick={() => Add(item)}>Buy Now</button>
                                </motion.div>
                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu