import React from 'react'
import style2 from './L.module.css';
import Look from '../components/Look';

const LookBook = () => {
  return (
    <>
      <div className={style2.look}>
        <div className={style2.look2}>
          <div className={style2.llp}>
            <h1>Lookbook</h1>
          </div>
        </div>
      </div>

      <Look />
    </>
  )
}

export default LookBook
