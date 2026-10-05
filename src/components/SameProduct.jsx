import React from 'react'
import style from './Same.module.css';
import Product from '../components/Product';
import { useContext, useState } from 'react';
import { myContext } from '../useContext/UseContext';

const SameProduct = ({ category }) => {

    const { menProducts, woMenProducts, collectionProducts } = useContext(myContext);


    //Sorting state
    const [sort, setSort] = useState("default");


    let products = [];

    if (category === "men") {
        products = menProducts;
    } else if (category === "women") {
        products = woMenProducts;
    } else {
        products = collectionProducts;
    }

    let sortedProducts = [...products];


    if (sort === "price-low") {

        sortedProducts.sort((a, b) => {
            return a.price - b.price;
        });

    } else if (sort === "price-high") {

        sortedProducts.sort((a, b) => {
            return b.price - a.price;
        });

    } else if (sort === "latest") {

        sortedProducts.sort((a, b) => {
            return b.id - a.id;
        });

    }


    return (
        <>
            <section className={style.mensec}>
                <div className={style.men}>
                    <div className={style.meninner}>
                        <div className={style.menmain}>
                            <div className={style.meni1}>

                                <div className={style.hh}>
                                    <h1>{category === "men" ? "Men" : category === "women" ? "Women" : "Shop"}</h1>
                                </div>

                                <div className={style.prodcutinfo}>

                                    <div className={style.info11}>

                                        <button className={style.infobu}>

                                            <span className={style.bu1}>

                                                <i className={`${style.ic} fa-solid fa-bars`} ></i>

                                            </span>
                                            <span className={style.bu2}>FILTER SHOES</span>
                                        </button>

                                        <p className={style.bup}>Showing all 8 results</p>

                                    </div>

                                    <div className={style.info22}>
                                        <form action="#">
                                            <select className={style.select} value={sort} onChange={(e) => setSort(e.target.value)} name="" id="">
                                                <option value="default">Default sorting</option>
                                                {/* <option value="">Sort by popularity</option>
                                                <option value="">Sort by average rating</option> */}
                                                <option value="latest">Sort by latest</option>
                                                <option value="price-low">Sort by price: low to high</option>
                                                <option value="price-high">Sort by price: high to low</option>
                                            </select>
                                        </form>

                                        {/* <div>
                      <span></span>
                    </div> */}
                                    </div>

                                </div>

                                <div className={style.product}>
                                    <div className={style.productdata}>

                                        <div className={style.productimage}>
                                            {
                                                // category === "men" ?
                                                //     menProducts.map((product) => (
                                                //         <Product
                                                //             key={product.id}
                                                //             product={product}
                                                //         />
                                                //     ))
                                                //     : category === "women" ?
                                                //         woMenProducts.map((product) => (
                                                //             <Product
                                                //                 key={product.id}
                                                //                 product={product}
                                                //             />
                                                //         ))
                                                //         :
                                                //         collectionProducts.map((product) => (
                                                //             <Product
                                                //                 key={product.id}
                                                //                 product={product}
                                                //             />
                                                //         ))

                                                sortedProducts.map((product) => (
                                                    <Product key={product.id} product={product} />
                                                ))


                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SameProduct
