import React, { act, useReducer } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';
import { myContext } from '../useContext/UseContext';
import style from './Single.module.css';
import { useNavigate } from 'react-router-dom';


const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        if (state > 1

        ) {
            return state - 1;
        }
        return state;
    }
}

const SingleProduct = () => {

    const [showMessage, setShowMessage] = useState(false);

    const { id } = useParams();
    console.log(id);

    const { products, newArrivals, menProducts, woMenProducts, collectionProducts, sale } = useContext(myContext);


    const allProduct = [...products, ...newArrivals, ...menProducts, ...woMenProducts, ...collectionProducts, ...sale];

    // let [dataFilter] = products.filter(product => product.id == id);
    // console.log(dataFilter);
    // let [dataFilter2] = newArrivals.filter(product => product.id == id);
    // console.log(dataFilter2);

    const navigate = useNavigate();

    const product = allProduct.find(product => product.id == id);

    if (!product) {
        return <h1>Product Not Found</h1>
    }
    const [count, dispatch] = useReducer(reducer, 1)

    return (


        <>
            <section className={style.si}>
                <div className={style.si1}>
                    <div className={style.si2}>
                        <div className={style.sim}>

                            <div className={showMessage ? style.messageShow : style.message}>
                                <div className={style.message2}>
                                    <div className={style.q1}>
                                        <i className={`${style.color} fa-solid fa-circle-check`}></i>
                                        <span> {count} {product.name} have been added to your cart.</span>
                                    </div>
                                    <div className={style.q2}>
                                        <NavLink className={style.butt}>VIEW CART</NavLink>
                                    </div>

                                </div>
                            </div>

                            <div className={style.sin}>
                                <div className={`${style.image}`}>
                                    {
                                        <img src={product.image} alt="" />
                                    }
                                </div>

                                <div className={style.imageinfo}>
                                    <h1 className={style.imagehad}>
                                        {
                                            product.name
                                        }
                                    </h1>

                                    <p className={style.sinp}>
                                        <span className={style.smm2}>
                                            ${
                                                product.originalPrice | product.price
                                            }
                                        </span>
                                        <span className={style.smm}> & Free Shipping </span>
                                    </p>

                                    <p className={style.all}>
                                        Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
                                    </p>

                                    <form action="#">
                                        <div className={style.lo}>

                                        </div>

                                    </form>

                                    <div className={style.buss}>
                                        <div className={style.but}>
                                            <div className={style.plusminus}>
                                                <button onClick={() => dispatch({ type: "INCREMENT" })} className={style.plus}>
                                                    +1
                                                </button>
                                                <span className={style.spk}>{count}</span>
                                                <button onClick={() => dispatch({ type: "DECREMENT" })} className={style.minus}>
                                                    -1
                                                </button>
                                            </div>

                                            <div>
                                                <button className={style.lkm1} onClick={() => setShowMessage(true)}>
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>



                                        {/* <button className={style.lkm}>
                                            <NavLink className={style.ppa} to={k === "men" ? `/men` : k === "women" ? "/women" : `/collection`}>Back</NavLink>
                                        </button> */}

                                        <button
                                            className={style.lkm}
                                            onClick={() => navigate(-1)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct
