import React from 'react'
import Formater from './Formater'

const FoodItem = ({posts,getname}) => {
    return (
        <div className='cards'>
           {posts.map((items) => (
               <Formater key={items.id} items={items} getname={getname} />
           ))}


         
        </div>
    )
}
export default FoodItem