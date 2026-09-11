import React, { useState } from 'react'
import style2 from './Home.module.css';
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s3j from "../assets/s3.jpg"
import shoe from "../assets/shoe.png"
import logo from "../assets/lk.svg"
import logo2 from "../assets/as.jpg"
import lp1 from "../assets/lp.jpg"
import lp2 from "../assets/lp2.jpg"
import lp3 from "../assets/lp3.jpg"
import Product from '../components/Product';
// import { products, newArrivals } from '../data/products';
import { myContext } from '../useContext/UseContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';



const Home = () => {


    const { products, newArrivals } = useContext(myContext);

    return (
        <>
            <section className={style2.main}>
                <div className={style2.mainBG}>
                    <div className={style2.inner}>
                        <div className={style2.innermain}>
                            <div className={style2.innerhading}>
                                <h1>Love the Planet we walk on</h1>
                            </div>

                            <div className={style2.pp}>
                                <p>Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                            </div>

                            <div className={style2.button}>
                                <button>
                                    <NavLink className={style2.cck} to='/men'>SHOP MEN</NavLink>
                                </button>
                                <button>
                                    <NavLink className={style2.cck} to={`/women`}>SHOP WOMEN</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className={style2.images}>
                <div className={style2.imagesinner}>
                    <div className={style2.mainimage}>
                        <div className={style2.kk}>
                            <div className={style2.kk1}>
                                <h6>As seen in:</h6>
                            </div>

                            <div className={style2.ss}>
                                {/* <div className={style2.ss1}></div> */}
                                <img className={style2.ss1} src={s1} alt="S1" />
                            </div>
                            <div className={style2.ss}>
                                <img className={style2.ss1} src={s2} alt="S1" />
                            </div>
                            <div className={style2.ss}>
                                <img className={style2.ss1} src={s3} alt="S1" />
                            </div>
                            <div className={style2.ss}>
                                <img className={style2.ss1} src={s4} alt="S1" />
                            </div>
                            <div className={style2.ss}>
                                <img className={style2.ss1} src={s5} alt="S1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={style2.images}>
                <div className={`${style2.imagesinner} ${style2.ii}`}>
                    <img width={600} height={640} src={s3j} alt="S3" />

                    <div className={style2.info}>
                        <div className={style2.info1}>
                            <h6>About Us</h6>
                        </div>

                        <div className={style2.info2}>
                            <h2>Selected materials designed for comfort and sustainability</h2>
                        </div>

                        <div className={style2.info3}>
                            <div>
                                <p>Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
                            </div>
                        </div>

                        <div className={style2.info4}>
                            <div>
                                <a className={style2.info4a} href="#">
                                    <span className={style2.span1}>
                                        <span>
                                            READ MORE
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style2.images} ${style2.l}`}>
                <div className={`${style2.imagesinner} ${style2.l1} ${style2.ii}`}>
                    <div className={style2.linner}>
                        <div className={style2.linner1}>
                            <div className={style2.linner1A}>
                                <h2>See how your shoes are made</h2>
                            </div>
                        </div>

                        <div className={style2.linner2}>
                            <p>Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>
                        </div>

                        <div className={style2.linner3}>
                            <div className={style2.linner3A}>
                                <div className={style2.a31}>
                                    <div className={style2.hand}>
                                        <h6>01.</h6>
                                    </div>

                                    <div className={style2.det}>
                                        <div>
                                            <h4><span>Pet canvas</span></h4>
                                            <p>Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
                                        </div>
                                    </div>

                                    <div className={style2.line}>
                                        <div className={style2.lineinner}></div>
                                    </div>

                                    <div className={style2.hand}>
                                        <h6>02.</h6>
                                    </div>

                                    <div className={style2.det}>
                                        <div>
                                            <h4><span>Algae foam + <br />vegan glue</span></h4>
                                            <p>Enim tincidunt donec vulputate magna pharetra mattis in</p>
                                        </div>
                                    </div>

                                </div>

                                <div className={style2.shoeimage}>
                                    <img width={600} height={480} src={shoe} alt="SHOE" />
                                </div>

                                <div className={`${style2.a31} ${style2.a311}`}>
                                    <div className={style2.hand}>
                                        <h6>03.</h6>
                                    </div>

                                    <div className={style2.det}>
                                        <div>
                                            <h4 className={style2.hp}><span>Organic cotton</span></h4>
                                            <p className={style2.hp}>A vel ipsum, sed dignissim elementum ultrices amet</p>
                                        </div>
                                    </div>

                                    <div className={style2.line}>
                                        <div className={style2.lineinner}></div>
                                    </div>

                                    <div className={style2.hand}>
                                        <h6>04.</h6>
                                    </div>

                                    <div className={`${style2.det}`}>
                                        <div>
                                            <h4 className={style2.hp}><span>Upcycled plastic bottles</span></h4>
                                            <p className={style2.hp}>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={`${style2.images} ${style2.ii}`}>
                <div className={style2.imagesinner}>
                    <div className={style2.products}>

                        <div className={style2.productsinner}>
                            <div>
                                <h4>Our Best Seller</h4>
                            </div>

                            <div className={style2.show}>
                                <a href="#">
                                    <span className={style2.showspan}>
                                        <span>
                                            View All Best Sellers
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className={style2.product}>
                            <div className={style2.productdata}>

                                <div className={style2.productimage}>
                                    {
                                        products.map((product) => (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={`${style2.images} ${style2.ii}`}>
                <div className={style2.secinner}>
                    <div>
                        <h2 className={style2.oph}>Men</h2>
                    </div>

                    <div>
                        <button className={style2.op}>SHOP MEN</button>
                    </div>
                </div>
                <div className={style2.secinner2}>
                    <div>
                        <h2 className={style2.oph}>Women</h2>
                    </div>

                    <div>
                        <button className={style2.op}>SHOP WOMEN</button>
                    </div>
                </div>

                <div></div>
            </section>

            <section className={style2.images}>
                <div className={style2.imagesinner}>
                    <div className={style2.products}>

                        <div className={style2.productsinner}>
                            <div>
                                <h4>New Arrivals</h4>
                            </div>

                            <div className={style2.show}>
                                <a href="#">
                                    <span className={style2.showspan}>
                                        <span>
                                            View all new arrivals
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className={style2.product}>
                            <div className={style2.productdata}>

                                <div className={style2.productimage}>
                                    {
                                        newArrivals.map((product) => (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={style2.other}>
                <div className={style2.otherinner}>
                    <div className={style2.other1}>
                        <div className={style2.other1m}>
                            <div className={style2.other1i}>
                                <p>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
                            </div>
                            <div className={style2.other2i}>
                                <div className={style2.oo}>

                                </div>
                            </div>

                            <div className={style2.other3i}>
                                <div className={style2.oo1}>
                                    <img width={104} height={104} src={logo} alt="" />
                                </div>
                                <div className={style2.oo1}>
                                    <img width={104} height={104} src={logo} alt="" />
                                </div>
                                <div className={style2.oo1}>
                                    <img width={104} height={104} src={logo} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className={style2.as}>
                            <div className={style2.as2}>
                                <img className={style2.asimage} width={320} height={320} src={logo2} alt="LOGO" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style2.lpm}>
                <div className={style2.other1}>
                    <div className={style2.oot}>
                        <div className={style2.oot1}>
                            <div className={style2.ooti}>
                                <h2>Our Customers speak for us</h2>
                            </div>
                        </div>
                        {/* Profile */}
                        <div className={style2.ootpro}>
                            <div className={style2.pro1}>
                                <div className={style2.pro1a}>
                                    <div className={style2.lpa}>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star-half`}></i>
                                    </div>
                                </div>
                                <div className={style2.pro1b}>
                                    <div className={style2.rr1}>
                                        “Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”
                                    </div>
                                    <div className={style2.rr2}>
                                        <div className={style2.rr21}>
                                            <div className={style2.rt}>
                                                <img width={40} height={40} src={lp1} alt="Profile" />
                                            </div>
                                            <div className={style2.rt2}>
                                                <div className={style2.rt21}>
                                                    Julia Keys
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style2.pro1} ${style2.kj}`}>
                                <div className={style2.pro1a}>
                                    <div className={style2.lpa}>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star-half`}></i>
                                    </div>
                                </div>
                                <div className={style2.pro1b}>
                                    <div className={style2.rr1}>
                                        “Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus ”

                                    </div>
                                    <div className={style2.rr2}>
                                        <div className={style2.rr21}>
                                            <div className={style2.rt}>
                                                <img width={40} height={40} src={lp2} alt="Profile" />
                                            </div>
                                            <div className={style2.rt2}>
                                                <div className={style2.rt21}>
                                                    Luis Adrian
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style2.pro1} ${style2.kj2}`}>
                                <div className={style2.pro1a}>
                                    <div className={style2.lpa}>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star`}></i>
                                        <i className={`${style2.cp} fa-solid fa-star-half`}></i>
                                    </div>
                                </div>
                                <div className={style2.pro1b}>
                                    <div className={style2.rr1}>
                                        “Tortor suspendisse tincidunt accumsan platea pellentesque hac.”

                                    </div>
                                    <div className={style2.rr2}>
                                        <div className={style2.rr21}>
                                            <div className={style2.rt}>
                                                <img width={40} height={40} src={lp3} alt="Profile" />
                                            </div>
                                            <div className={style2.rt2}>
                                                <div className={style2.rt21}>
                                                    Maria Anna
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style2.aa}>
                            <div>4.8 average rating from 1814 reviews</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
