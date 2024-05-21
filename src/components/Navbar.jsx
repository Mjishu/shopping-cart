import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <Link className="Navbar-link" to="/">Home</Link>
            <Link className="Navbar-link" to="/store">Store</Link>
            {/* <Link to="/shopping-cart">Shopping Cart</Link> */}
        </header>
    )
}