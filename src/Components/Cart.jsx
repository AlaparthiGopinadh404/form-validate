import React from 'react';
import { useState, useEffect } from 'react';

function Cart(cartitem) {
  const [cartlist, setcartlist] = useState([])
  useEffect(() => {
    setcartlist([...cartlist, cartitem])
    console.log(cartlist)
    var filtered = cartlist.filter(function (x) {
      return x !== undefined;
    })
    if (cartlist === undefined) {
      setcartlist([...filtered, cartitem])
    

    }
    console.log(cartitem)
    console.log(filtered);

  }, [cartitem])
  const incNum = (i) => {
    cartlist[i].cartitem.quantity = cartlist[i]?.cartitem?.quantity + 1;
    setcartlist([...cartlist])
  };
  let decNum = (i) => {
    cartlist[i].cartitem.quantity = cartlist[i]?.cartitem?.quantity - 1;
    setcartlist([...cartlist])
    if (cartlist[i].cartitem.quantity === 0) {
      cartlist.splice(i, 1)
      setcartlist([...cartlist])
    }
  }


  // console.log(cartitem)
  return (
    <div className='border border-1 border-success mt-3  p-2 food'>
      <h1>Cart</h1>
      {cartlist && cartlist.map((a, i) => {
        // console.log(cartlist)
        return <li key={i}><div>${a?.cartitem?.food_item_price * a?.cartitem?.quantity}</div>
          {a?.cartitem?.food_item_name}
          <button type="button" className='btn btn-danger  m-2' onClick={() => { decNum(i) }}>-</button>
          {a?.cartitem?.quantity}
          <button type="button" className='btn btn-primary  m-2' onClick={() => { incNum(i) }}>+</button>
        </li>
      })}





    </div>
  )
}

export default Cart;