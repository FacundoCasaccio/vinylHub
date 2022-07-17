import { useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import './styles/Cart.css'

const Cart = () => {

    const { products, getProductsQuantity, removeProduct, clear, getTotalPrice } = useContext(cartContext);

    return (

        products.length === 0 ? 
        <h2>Your cart is empty, click <Link to="/"><u>here</u></Link> to continue purchasing</h2>
        :
        <>
            <div className="cart">
                <h2>Your purchase</h2>
                <div>
                    {products.map( product => (                    
                        <div key={product.id} className="cartProductCard">
                            <img src={product.source} alt="Product" />
                            <div className="cartProductInfo">
                                <h4>{product.name}</h4>
                                <div className="purchaseDetails">
                                    <span>Unit price: ${product.price}</span>
                                    <span>Quantity: {product.quantity}</span>
                                </div>
                                <button onClick={() => removeProduct(product.id)}>Remove item</button>
                            </div>
                        </div>
                        ))}
                </div>

                <h3>Total: ${getTotalPrice()}</h3>
            </div>
        </>
    )
}

export default Cart;