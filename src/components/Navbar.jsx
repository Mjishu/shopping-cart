import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <Link className="Navbar-link" to="/">Home</Link>
            <Link className="Navbar-link" to="/store">Store</Link>
            <Link className="Navbar-link" to="cart">Cart</Link>
            <Link className="Navbar-link" to="/new-item">New item </Link>
        </header>
    )
}