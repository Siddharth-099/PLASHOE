import React from 'react'

const Shop = () => {
    return (
        <>
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




        </>
    )
}

export default Shop
