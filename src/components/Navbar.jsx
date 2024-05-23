import {Link} from "react-router-dom"

export default function Navbar(props){
    return(
        <header>
            <Link className="Navbar-link" to="/">Home</Link>
            <Link className="Navbar-link" to="/store">Store</Link>
            <button className="Navbar-link" onClick={props.toggleCart}>Cart</button>
            <Link className="Navbar-link" >New item </Link>
        </header>
    )
}