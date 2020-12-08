import React from 'react'

const Formater = ({items,getname}) => {

   

    return (
        <div className='card'>
            <img className="imgsize" src={items.images} alt={items.name} onClick={()=>getname(items.name ,items.price)} />
            <div>
                {items.name}
                    <br/>
                {items.price}
            </div>
        </div>
    )
}
export default Formater