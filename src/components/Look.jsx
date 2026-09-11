import React from 'react'
import style2 from './Look.module.css';
import { useContext } from 'react';
import { myContext } from '../useContext/UseContext';

const Look = () => {

    const { look } = useContext(myContext);

    return (
        <>
            <div className={style2.pka}>
                <div className={style2.pka2}>
                    {
                        look.map((item) => (
                            <>
                                <div key={item.id} className={style2.pkaimage}>
                                    <img src={item.image} alt="" />
                                </div>

                                <div className={style2.pkam}>
                                    <div className={style2.pll}>
                                        <div className={style2.pll1}>
                                            <div className={style2.lo}>
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                        <div className={style2.lkj}>
                                            <div className={style2.j1}>
                                                <p>Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
                                            </div>

                                            <div className={style2.j2}>
                                                <a href="#">
                                                    <span>SHOP NOW</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Look
