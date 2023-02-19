import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='missing'>
    <h2>Sahifa topilmadi</h2>
    <p>Bunday sahifa aslida mavjud emas, uzr</p>
    <p>
        <Link to='/'>Bosh sahifaga o'ting</Link>
    </p>
    </main>
  )
}

export default Missing