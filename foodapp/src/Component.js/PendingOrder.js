import React from 'react'
import Pendingformat from './Pendingformat'

const PendingOrder = ({data}) => {
    return (
        <div>
            <h2>Pending Orders</h2> 
            {data.map(items => (
                <div>               
                    <Pendingformat items = {items}/>
                </div>
                
               
            ))}
        </div>
    )
}

export default PendingOrder