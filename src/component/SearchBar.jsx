



const SearchProduct = ({functionality}) => {
    return ( 
        <>
            <div className="w-full">
                <input type="search" onKeyUp={functionality} className="border px-2 text-sm rounded-2xl w-[70%] lg:w-[25%] py-1.5 ml-[20%] lg:ml-[40%] mt-5" placeholder="Search for an item..."/>
            </div>
        </>
     );
}
 
export default SearchProduct;