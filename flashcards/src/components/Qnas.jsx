import React from 'react'
import Cards from './Cards'

// const Qnas = ({items, removeItem}) => {
//   return (
//     <div>
//       {items.map((item)=>{
//         return <Cards key={item.id} {...item} removeItem={removeItem} />
//       })
//       }
//     </div>
    
//   )
// }

const Qnas = ({currItem, removeItem}) => {
  return (
    <div>
      <Cards key={currItem.id} {...currItem} removeItem={removeItem} />
    </div>
  )
}





export default Qnas