import { useState } from "react";
import Button from "./Button";
import ProductDetails from "./ProductDetails";

const ProductList = ({product}) => {

    const [show, setShow] = useState(false)

    const [selectedProduct, setSeletedProduct] = useState(product)
    
    const displayDetails = id =>{
        let clickedProduct = product.find(item => item.id === id)
        setSeletedProduct(clickedProduct)
        setShow(true)

    }

if(!show){


    return ( 
        <>
            <div className="grid lg:grid-cols-4 gap-5 px-10 mt-5 pb-10">
                {
                    product.map(item =>{
                        return(
                            <div key={item.id} className="border border-dashed rounded-lg p-5 space-y-5">
                                   <h1><span className="font-semibold">Product name:</span> {item.name}</h1>
                                   <p><span className="font-semibold">Category:</span> {item.category}</p>
                                   <p><span className="font-semibold">Price:</span> ${item.price} </p>

                                    <div className="flex justify-between items-center">
                                        <small className={item.inStock === true? 'text-green-500': 'text-red-500' }>[ {item.inStock === true? 'In stock': 'Out of stock' } ]</small>
                                        <Button label='View Details' functionality={()=>{displayDetails(item.id)}}/>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
     );
}

else{
    return(
        <>
            <ProductDetails product={selectedProduct} display={setShow}/>
        </>
    )
}
}
 
export default ProductList;