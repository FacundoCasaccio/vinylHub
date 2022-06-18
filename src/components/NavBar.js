import logo from "../assets/vinylIcon.jpg"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="vinyl icon" />
                <h1>VinylHub</h1>
            </div>

            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
                <CartWidget products={null}/>
            </ul>
        </nav>
    )
}

export default NavBar;