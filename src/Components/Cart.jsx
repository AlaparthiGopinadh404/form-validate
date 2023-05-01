<<<<<<< HEAD
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





=======
import React, { useState, useEffect } from 'react'

function Cart({cartitem}) {
    const[cartlist,setcartlist]=useState([])
    useEffect(()=>{
        // console.log(cartlist)
        var filtered = cartlist.filter(function(x) {
            return x !== undefined;
        });
        if(cartitem!==undefined){
            let res =[...filtered,cartitem]
            setcartlist(res)
            localStorage.setItem("array",JSON.stringify(res))           
        }
        getlist()
      },[cartitem])

      const getlist=()=>{
        const str = localStorage.getItem("array")
        if(str){
            setcartlist(JSON.parse(str))
        }
      }

      const incNum = (i) => {
        cartlist[i].quantity=cartlist[i]?.quantity+1;
        setcartlist([...cartlist])
      };
      let decNum = (i) => {
        cartlist[i].quantity=cartlist[i]?.quantity-1;
        setcartlist([...cartlist])
        if(cartlist[i].quantity===0){
            const temp= [...cartlist];
            temp.splice(i,1);
            let res =[...temp]
            setcartlist(res)
            localStorage.setItem("array",JSON.stringify(res))
        }
      }
  return (
    <div className='border border-2 my-3 me-3 p-3 h-100'>
        <ul className='scroll'>
            <h1 className='text-center'>Cart</h1>
            {cartlist && cartlist.map((li,i)=>{
            return <li key={i}>
                <span className="d-flex justify-content-around">
                    <div className='w-75'>{li?.food_item_name}</div>
                    <div>{(li?.food_item_price*li?.quantity).toFixed(2)+"$"}</div>
                </span>
                <div className="d-flex justify-content-center gap-2">
                    <div><button type="button" className='btn btn-outline-danger  btn-sm border-3 px-2' onClick={() => {decNum(i)}}>-</button></div>
                    <div className='align-item-center mt-1'>{li?.quantity}</div>
                    <div><button type="button" className='btn btn-outline-success btn-sm border-3 px-2' onClick={() => {incNum(i)}}>+</button></div>
                </div>
            </li>
        })}
        </ul>
>>>>>>> 109801f0ffe496b033c5afe1eced321016f061a7
    </div>
  )
}

<<<<<<< HEAD
export default Cart;
=======
export default Cart
>>>>>>> 109801f0ffe496b033c5afe1eced321016f061a7
