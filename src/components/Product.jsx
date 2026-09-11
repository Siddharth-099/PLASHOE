import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Product.module.css";
import { useState } from 'react';

const Product = ({ product }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className={style.kl} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <div className={style.kl1}>
                    <img src={product.image} alt={product.name} />
                    <button className={`${style.view} ${show ? style.show : ""}`}>
                        {/* <NavLink to={`/singleproduct/${product.id}`}>View</NavLink> */}
                        <NavLink className={style.os} to={`/singleproduct/${product.id}`}>View</NavLink>
                    </button>
                </div>

                <div className={style.kl2}>
                    <h2>{product.name}</h2>

                    <p>
                        <del>${product.originalPrice}</del>
                        ${product.price}
                    </p>
                </div>


            </div >
        </>
    )
}

export default Product
