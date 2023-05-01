import React from 'react'

function Sidenav({items,index,setIndex,setItemindex}) {
    const add=(i)=>{
        setIndex(i)
        setItemindex("")
        // console.log(index)
    }
    // console.log(index)
  return (
    <div>
        <aside className="bd-sidebar bd-expand-lg bg-body-tertiary border border-end">      
            <div className="offcanvas-body ">
                <nav className="bd-links " id="bd-docs-nav" aria-label="Docs navigation">
                    <ul className="bd-links-nav text-dark-subtle list-unstyled mx-2">
                        <li className="bd-links-group pt-2">
                            <strong className="bd-links-heading d-flex w-100 align-items-center" id="ui">
                                Catogories
                            </strong>
                            <ul className="li list-unstyled fw-normal mx-2 pb-2 small">
                                {items && items.map((row,i) => (
<<<<<<< HEAD
                                    <li className=' d-flex my-3' key={i}>
                                        <div id="com">
                                            {index===i
                                            ?<button onClick={()=>{add(i)}} className='btn btn-primary'>{row?.category_name}</button>
                                            :<button onClick={()=>{add(i)}} className='btn btn-outline-primary'>{row?.category_name}</button>}
=======
                                    <li className=' d-flex my-3' key={row?.category_id}>
                                        <div id="com">
                                            {index===i?<button onClick={()=>{add(i)}} className='btn btn-primary btn-sm'>{row?.category_name}</button>:<button onClick={()=>{add(i)}} className='btn btn-outline-primary btn-sm'>{row?.category_name}</button>}
>>>>>>> 109801f0ffe496b033c5afe1eced321016f061a7
                                            
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
  )
}

export default Sidenav