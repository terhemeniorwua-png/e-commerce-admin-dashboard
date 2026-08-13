// import Button from "./Button";
// import { useState } from "react";


// const ProductCard = ({product}) => {

//         const [selectedProduct, setSeletedProduct] = useState(product)
    
//     const displayDetails = id =>{
//         let clickedProduct = product.find(item => item.id === id)
//         setSeletedProduct(clickedProduct)

   
//     return ( 
//         <>
//             <div className="grid grid-cols-4 gap-5 px-10 mt-5">
//                 {
//                     product.map(item =>{
//                         return(
//                             <div key={item.id} className="border border-dashed rounded-lg p-5 space-y-5">
//                                    <h1><span className="font-semibold">Product name:</span> {item.name}</h1>
//                                    <p><span className="font-semibold">Category:</span> {item.category}</p>
//                                    <p><span className="font-semibold">Price:</span> ${item.price} </p>

//                                     <div className="flex justify-between items-center">
//                                         <small className={item.inStock === true? 'text-green-500': 'text-red-500' }>[ {item.inStock === true? 'In stock': 'Out of stock' } ]</small>
//                                         <Button label='View Details' functionality={()=>{displayDetails(item.id)}}/>
//                                     </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
        
//         </>
//      );
// }}
 
// export default ProductCard;