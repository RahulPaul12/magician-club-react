import React from 'react';

const Cart = (props) => {
  
    const {add} = props;
   
    let total =0;
    
    for(const people of add){
        total= total + people.salary;
       
    }
   
    return (
        <div className="cart">
           
             <h3>People Added</h3>
            <h4>Total Added: {props.add.length} </h4>
            <h4>Cost: {total}</h4>
            {props.add.map(personname=><li>{personname.name}</li>)}
            
        </div>
    );
};

export default Cart;