import logo from "../assets/vinylIcon.jpg"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const NavBar = () => {

    const { products } = useContext(cartContext);

    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo} alt="vinyl icon" /></Link>
                <h1>VinylHub</h1>
                
            </div>

            <ul>
                <li><Link to="/category/albums">Albums</Link></li>
                <li><Link to="/category/shirts">T-Shirts</Link></li>
                <Link to="/cart"><CartWidget products={products}/></Link>
            </ul>
        </nav>
    )
}

export default NavBar;