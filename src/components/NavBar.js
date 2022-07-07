import logo from "../assets/vinylIcon.jpg"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo} alt="vinyl icon" /></Link>
                <h1>VinylHub</h1>
                
            </div>

            <ul>
                <li><Link to="/category/albums">Albums</Link></li>
                <li><Link to="/category/shirts">T-Shirts</Link></li>
                <li>About</li>
                <CartWidget products={null}/>
            </ul>
        </nav>
    )
}

export default NavBar;