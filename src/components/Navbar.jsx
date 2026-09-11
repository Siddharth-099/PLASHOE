import React, { useReducer } from 'react'
import style from './Navbar.module.css';
import { Outlet, NavLink } from 'react-router-dom';
import Foot from './Foot';


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


const Navbar = () => {

    const [count, dispatch] = useReducer(reducer, 1);

    return (
        <>
            <div className={style.nav}>
                <div className={style.navinn}>
                    <p className={style.message}>Free Express Shipping on all orders with all duties included</p>
                </div>
            </div>


            <nav className={style.navmain}>
                <div className={style.navinner}>
                    <div className={style.navinnermain}>
                        <div className={style.uili}>

                            <div className={style.uili1}>
                                <span className={style.span}>
                                    <NavLink href="/">
                                        <img width={139} height={24} src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" alt="" />
                                    </NavLink>
                                </span>
                            </div>
                            <ul className={style.ul}>
                                {/* <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/">Home</NavLink></li> */}
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/men">MEN</NavLink></li>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/women">WOMEN</NavLink></li>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/collection">COLLECTION</NavLink></li>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/lookbook">LOOKBOOK</NavLink></li>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/sale">SALE</NavLink></li>
                            </ul>
                        </div>

                        <div className={style.othernav}>
                            <div className={`${style.ul} ${style.ul2}`}>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/ourstory">OUR STORY</NavLink></li>
                                <li className='li'><NavLink className={({ isActive }) => (`${isActive ? style.co : ""} ${style.ss}`)} to="/contact">CONTACT</NavLink></li>
                            </div>

                            {/* Offcanvas */}

                            <div className={`${style.oof} offcanvas offcanvas-end`} id="demo">
                                <div className={`${style.offcanvasheader}`}>
                                    <h1 className={`${style.offcanvastitle}`}>Shopping Cart</h1>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className={style.plusminus}>
                                        <button onClick={() => dispatch({ type: "INCREMENT" })} className={style.plus}>
                                            +1
                                        </button>
                                        <button className={style.singlebu}>
                                            ADD TO CART = {count}
                                        </button>
                                        <button onClick={() => dispatch({ type: "DECREMENT" })} className={style.minus}>
                                            -1
                                        </button>
                                    </div>

                                    <button class="btn btn-secondary" type="button">A Button</button>
                                </div>
                            </div>

                            {/* Offcanvas End */}

                            <div className={style.cart}>
                                <div>
                                    <a href="#">
                                        <i data-bs-toggle="offcanvas" data-bs-target="#demo" className={`${style.cartcolor} fa-solid fa-bag-shopping`} ></i>
                                    </a>
                                </div>
                            </div>

                            <div className={style.user}>
                                <div>
                                    <i className={`${style.cartcolor} fa-solid fa-user`} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />

            <Foot />
        </>
    )
}

export default Navbar
