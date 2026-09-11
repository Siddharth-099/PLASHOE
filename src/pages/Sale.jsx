import React from 'react'
import style2 from './Sale.module.css';
import Product from '../components/Product';
import { useContext } from 'react';
import { myContext } from '../useContext/UseContext';

const Sale = () => {

  const { sale } = useContext(myContext);

  return (
    <>
      <div className={style2.sale}>
        <div className={style2.saleinner}>
          <div className={style2.sale1}>
            <h1>Sale</h1>
          </div>
        </div>
      </div >

      <section className={style2.sec}>
        <div className={style2.sec1}>
          <div className={style2.lkm1}>
            <h5>Refer a friend</h5>
          </div>

          <div className={style2.lkm2}>
            <h2>Get 20% OFF</h2>
          </div>

          <div className={style2.lkm3}>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        <div className={style2.sec2a}>
          <div className={style2.lkm1}>
            <h5>Refer a friend</h5>
          </div>

          <div className={style2.lkm2}>
            <h2>Get 20% OFF</h2>
          </div>

          <div className={style2.lkm3}>
            <a href="#">LEARN MORE</a>
          </div>
        </div>
      </section>

      <section className={style2.j}>
        <div className={style2.jk}>
          <div className={style2.jk2}>
            <div className={style2.jk3}>
              <div className={style2.jk4}>
                <h4>Last Pairs</h4>
              </div>
              <div className={style2.jk5}>
                <a href="#"><span>VIEW ALL</span></a>
              </div>
            </div>

            <div className={style2.j6}>
              <div className={style2.j7}>
                <div className={style2.j8}>

                  <div className={style2.product}>
                    <div className={style2.productdata}>

                      <div className={style2.productimage}>
                        {
                          sale.map((product) => (
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
        </div>
      </section>

      <section className={style2.j9}>
        <div className={style2.j10}>
          <div className={style2.j11}>
            <div className={style2.j12}>
              <div className={style2.j13}>
                <span><i className={`${style2.color} fa-solid fa-gifts`}></i></span>
              </div>

              <div className={style2.j14}>
                <h3>The best gift</h3>
                <p>Lacus vel sit eu integer leo nec ornare consequat eget dolor</p>
              </div>

            </div>
          </div>

          <div className={style2.j15}>
            <div>
              <a href="#">SHOP GIFT CARD</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sale
