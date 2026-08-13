import Button from "./Button";
import ProductList from "./ProductList";


const ProductDetails = ({product, display}) => {
    

        const handleClose = () =>{
            display(false)
        }


    return ( 
        <>
                       
                            <div key={product.id} className="border border-dashed rounded-lg p-5 space-y-5 mt-5 w-[90%] lg:w-[25%] m-auto">
                                   <h1><span className="font-semibold">Product name:</span> {product.name}</h1>
                                   <p><span className="font-semibold">Category:</span> {product.category}</p>
                                   <p><span className="font-semibold">Price:</span> ${product.price} </p>

                                    <div className="flex justify-between items-center">
                                        <small className={product.inStock === true? 'text-green-500': 'text-red-500' }>[ {product.inStock === true? 'In stock': 'Out of stock' } ]</small>
                                        <Button label='Close' functionality={handleClose}/>
                                    </div>
                            </div>
                       
        </>
     );
}

 
export default ProductDetails;