import React from 'react'
import {navitems} from './Info'
import Sidenav from './Sidenav'
import List from './List'
import { useState } from 'react'
import Cart from './Cart'

function Dashboard() {
    const [index,setIndex]=useState(0)
    const[itemindex,setitemindex]=useState()
    // const[cartlist,setcartlist]=useState([])
    let items=navitems?.catogories
    let item=items[index]?.food_item
    let cartitem=item[itemindex]
    console.log(itemindex)
    // console.log(items)
    console.log(cartitem)
    console.log(index)
    // useEffect(()=>{
    //   setcartlist([...cartlist,cartitem])
    // },[])
  return (
    <div className=''>
        <div className='d-flex'>
            <div><Sidenav items={items} index={index} setIndex={setIndex}></Sidenav></div>
           <div className='w-75'><List item={item}  itemindex={itemindex} setitemindex={setitemindex}></List></div> 
            <div className='w-25'><Cart cartitem={cartitem}  ></Cart></div>
        </div>
    </div>
  )
}

export default Dashboard