

const Head = () => {
    return ( 
        <>
            <div className="text-center pt-5 font-black text-3xl underline">
                <h1>My Store</h1>
            </div>
        </>
     );
}
 
const Nav = ({all, instock, outofStock}) => {
    return ( 
        <>
            <nav>
                <ul className="flex items-center justify-center gap-5 pt-3 font-semibold">
                    <li onClick={all} className="hover:cursor-pointer">[ &ensp; All &ensp; ]</li>
                    <li onClick={instock} className="hover:cursor-pointer">[ &ensp; InStock &ensp; ]</li>
                    <li onClick={outofStock} className="hover:cursor-pointer">[ &ensp; Out of Stock &ensp; ]</li>
                </ul>
            </nav>
        </>
     );
}
 

const Header = ({allProducts, inStockProducts, outOfStock}) => {
    return ( 
        <>
        <Head />
        <Nav all={allProducts} instock={inStockProducts} outofStock={outOfStock}/>
        </>
     );
}
 

export default Header;