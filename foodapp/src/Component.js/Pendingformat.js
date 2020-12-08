import React from 'react'

const Pendingformat = ({items}) => {
    return (
        <div className="orderdata">
          <h3>Total Amount:- {items.total}</h3> 
            <table>
                <th>
                    <td>
                        {items.foodprice.map(item =>(
                            <div>
                            {item} -
                            </div>
                        ))}
                    </td>

                    <td>
                    {items.fooditem.map(item =>(
                        <div>
                        {item} 
                        </div>
                    ))}
                    </td>
                </th>
            </table>
           
           
        </div>
    )
}

export default Pendingformat