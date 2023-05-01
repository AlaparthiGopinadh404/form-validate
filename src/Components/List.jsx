import React from 'react'

function List({item ,itemindex,setitemindex}) {
    const add= (i)=>{
        setitemindex(i)
        console.log(item[itemindex]?.quantity)
        
    }
    return (
    <div className='d-flex flex-wrap gap-2 mx-3 mt-3 mb-auto food p-2 border border-1 border-success '>
        {item && item.map((row,i) => (
            <div className="card h-25" key={i}>
                <div className="card-body">
                    <h5 className='card-title'> ID:{row?.food_item_id}</h5>
                    <h5 className="card-title">{row?.food_item_name}</h5>
                    <h5 className='card-title'>${row?.food_item_price}</h5>
                    {/* {itemindex?disabled:<button className="btn btn-primary" onClick={()=>{add(i)}}>Add to cart</button>} */}
                    <button className="btn btn-primary" onClick={()=>{add(i)}}>Add to cart</button>

                </div>
            </div>
        ))}
        
    </div>
  )
}

export default List