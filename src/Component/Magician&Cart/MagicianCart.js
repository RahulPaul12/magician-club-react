import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Magician from '../Magician/Magician';
import './MagicianCart.css';

const MagicianCart = () => {
    const [magicians, setmagician] = useState([]);
    const [add, setadd]=useState([]);
    
    useEffect(() => {
        fetch('./fakedb.JSON')
        .then(res=>res.json())
        .then(data=>setmagician(data));
    },[]);
    const handleHirebtn = (magician)=>{
        const newadd = [...add, magician];
        setadd(newadd);
    }
    return (
        <div className="magiciancart-container">
            <div className="magician-container">
                  {
                      magicians.map(magician=> <Magician 
                        key={magician.key}
                        magician={magician}
                        handleHirebtn={handleHirebtn}>
                        </Magician> )
                  }
            </div>
            <div className="cart-container">
                  <Cart add={add}></Cart>
                   
            </div>
            
            
        </div>
    );
};

export default MagicianCart;