import React from 'react'
import style from './Men.module.css';
import Product from '../components/Product';
import { useContext } from 'react';
import { myContext } from '../useContext/UseContext';
import SameProduct from '../components/SameProduct';

const Men = () => {

  const { menProducts } = useContext(myContext);

  return (
    <>
      <SameProduct category="men" />
      {/* <section className={style.mensec}>
        <div className={style.men}>
          <div className={style.meninner}>
            <div className={style.menmain}>
              <div className={style.meni1}>

                <div className={style.hh}>
                  <h1>Men</h1>
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
                      <select className={style.select} name="" id="">
                        <option value="">Default sorting</option>
                        <option value="">Sort by popularity</option>
                        <option value="">Sort by average rating</option>
                        <option value="">Sort by latest</option>
                        <option value="">Sort by price: low to high</option>
                        <option value="">Sort by price: high to low</option>
                      </select>
                    </form>
                  </div>

                </div>

                <div className={style.product}>
                  <div className={style.productdata}>

                    <div className={style.productimage}>
                      {
                        menProducts.map((product) => (
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
          </div>
        </div>
      </section > */}
    </>
  )
}

export default Men
