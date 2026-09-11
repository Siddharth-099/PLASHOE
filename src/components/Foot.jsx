import React from 'react'
import f1 from './Foot.module.css';
import { Outlet, NavLink } from 'react-router-dom';
// import f1 from './Navbar.module.css'

const Foot = () => {
    return (
        <>
            {/* <Outlet /> */}
            <section className={f1.sec}>
                <div className={f1.f1}>
                    <div className={f1.f1inner}>
                        <div className={f1.f1main}>
                            <div className={f1.main1}>
                                <h2>Better for People & the Planet</h2>
                            </div>

                            <div className={f1.main2}>
                                <div>
                                    <p>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
                                </div>
                            </div>
                            <div className={f1.main3}>
                                <button className={f1.opf}>SHOP MEN</button>
                                <button className={f1.opf}>SHOP WOMEN</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={f1.f2}>
                        <div className={f1.f2main}>
                            <div className={f1.mainf2}>
                                <i className={`${f1.color} fa-solid fa-lock`}></i>
                                <span>Secure Payment</span>
                            </div>
                            <div className={f1.mainf2}>
                                <i className={`${f1.color} fa-solid fa-truck`}></i>
                                <span>Express Shipping</span>
                            </div>
                            <div className={f1.mainf2}>
                                <i className={`${f1.color} fa-solid fa-arrows-rotate`}></i>
                                <span>Free Return</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={f1.secf}>
                <div className={f1.link}>
                    <div className={f1.link1}>
                        <div className={f1.link1inner}>
                            <div className={f1.linkmain}>
                                <img width={139} height={24} src="	https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/site-logo.svg" alt="" />
                            </div>

                            <div className={f1.linkm2}>
                                <p>Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</p>
                            </div>
                        </div>

                        <div className={f1.link1i2}>
                            <div className={f1.link1m}>
                                <div className={f1.icons}>
                                    <a href="#">
                                        <i className={`${f1.icon} fa-brands fa-instagram`}></i>
                                    </a>
                                    <a href="#">
                                        <i className={`${f1.icon} fa-brands fa-pinterest-p`}></i>
                                    </a>
                                    <a href="#">
                                        <i className={`${f1.icon} fa-brands fa-facebook`}></i>
                                    </a>
                                    <a href="#">
                                        <i className={`${f1.icon} fa-brands fa-twitter`}></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={f1.link2}>
                        <div className={f1.link2a}>
                            <div className={f1.linkhand}>
                                <h5>Shop</h5>
                            </div>

                            <div>
                                <ul className={f1.ul}>
                                    {/* <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/">Home</NavLink></li> */}
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/men">Shope Men</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/women">Shop Women</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/collection">Lookbook</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/lookbook">Gift Card</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/sale">Sale</NavLink></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div>
                        <div className={f1.link2b}>
                            <div className={f1.linkhand}>
                                <h5>About</h5>
                            </div>

                            <div>
                                <ul className={f1.ul}>
                                    {/* <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/">Home</NavLink></li> */}
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/men">Our Story</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/women">Our Materials</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/collection">Our Value</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/lookbook">Sustainability</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/sale">Manufacture</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={f1.link2c}>
                            <div className={f1.linkhand}>
                                <h5>Need Help?</h5>
                            </div>

                            <div>
                                <ul className={f1.ul}>
                                    {/* <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/">Home</NavLink></li> */}
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/men">FAQs</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/women">Shipping & Returns</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/collection">Shop Care</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/lookbook">Size Chart</NavLink></li>
                                    <li className='li'><NavLink className={({ isActive }) => (`${isActive ? f1.co : ""} ${f1.ss}`)} to="/sale">Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={f1.footer}>
                <div className={f1.footer1}>
                    <div className={f1.footer1in}>
                        <div className={f1.footercc}>
                            <p>© 2026 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
                        </div>

                        <div className={f1.foooticon}>
                            <div className={f1.footicons}>
                                <p>
                                    <img width={246} height={20} src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png" alt="UPI" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Foot
