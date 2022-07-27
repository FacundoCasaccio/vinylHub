import { useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import './styles/Cart.css'
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

const Cart = () => {

    const { products, getProductsQuantity, removeProduct, clear, getTotalPrice } = useContext(cartContext);
    const [purchaseId, setPurchaseId] = useState("");

    const customerPlaceholder = {
        customerName: "name",
        email: "email", 
        phone: "phone"
    }

    const finishPurchase = () => {
        const purchaseOrder = {
            customer: customerPlaceholder,
            products: [...products],
            date: serverTimestamp(),
            total: getTotalPrice()
        }
        const purchaseOrders = collection(db, "PurchaseOrders");
        addDoc(purchaseOrders, purchaseOrder)
        .then( (result) => {
            setPurchaseId(result.id);
        })
    }

    return (

        products.length === 0 ? 

        <h2>Your cart is empty, click <Link to="/"><u>here</u></Link> to continue purchasing</h2>
        :
        purchaseId !== "" ?
        <h2>Thank you for your purchase! Your order id is: {purchaseId}</h2>
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

                    <label for="name">Enter your name...</label>
                    <input type="text" name="name"/>
                    <label for="email">Enter your email...</label>
                    <input type="text" name="name"/>
                    <label for="name">Enter your phone number...</label>
                    <input type="text" name="name"/>
                    <button onClick={finishPurchase}>Complete purchase</button>
                
            </div>
        </>
    )
}

export default Cart;