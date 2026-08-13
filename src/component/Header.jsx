

const Head = () => {
    return ( 
        <>
            <div className="text-center pt-5 font-black text-3xl underline">
                <h1>My Store</h1>
            </div>
        </>
     );
}
 
const Nav = () => {
    return ( 
        <>
            <nav>
                <ul className="flex items-center justify-center gap-5 pt-3 font-semibold">
                    <li>[ &ensp; All &ensp; ]</li>
                    <li>[ &ensp; InStock &ensp; ]</li>
                    <li>[ &ensp; Out of Stock &ensp; ]</li>
                </ul>
            </nav>
        </>
     );
}
 

const Header = () => {
    return ( 
        <>
        <Head />
        <Nav />
        </>
     );
}
 

export default Header;