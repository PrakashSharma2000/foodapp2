import React from 'react'

const Addeditems = ({foodname ,foodprice, gettotal, itslength , total}) => {

 var val = 0
 
 
 for(let i=0;i<foodname.length;i++){ // add total bill before adding tip
  val = val + parseFloat(foodprice[i])
}

  const afun = () =>{
     gettotal(val)
     displayTotal(total)
  }
 
 
  const displayTotal = (total) =>{
    if(!total) return null
    return (
      <div>Total amount to pay:- {total}</div>
    );
  }

    return (
      
        <div className="addedclass">
          <table className="table">
              <th>
              <td>
              
              items:{foodname.map(food=>(
              <p>{food}</p>
            ))}

              </td>
              </th>

              <th>
              <td>
              Price:{foodprice.map(food=>(
              <p>{food}</p>
            ))}

              </td>
              
              </th>
              <tr  > <td className="row"><strong>Total:{val}</strong></td>  </tr>
          </table>
          <div>
                <h3>Add a tip</h3>
            <button onClick={() => afun()} className="tipbutton">10%</button>
          </div>
          
         <div>
          {displayTotal(total)}
         </div>
            
        </div>
    )
}




export default Addeditems