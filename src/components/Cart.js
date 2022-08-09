import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import './styles/Cart.css'
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

    const { products, getProductsQuantity, removeProduct, clear, getTotalPrice } = useContext(cartContext);
    const [purchaseId, setPurchaseId] = useState("");
    const notifySucceed = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    const finishPurchase = () => {

        let customerName = document.getElementById("name").value;
        let customerMail = document.getElementById("email").value;
        let customerPhone = document.getElementById("phone").value

        if (customerName !== "" &&
            customerMail !== "" ) {

                const purchaseOrder = {
                    customer: {
                        customerName: customerName,
                        email: customerMail,
                        phone: customerPhone
                    },
                    products: [...products],
                    date: serverTimestamp(),
                    total: getTotalPrice()
                }
        
                const purchaseOrders = collection(db, "PurchaseOrders");
                addDoc(purchaseOrders, purchaseOrder)
                    .then((result) => {
                        setPurchaseId(result.id);
                    })
                notifySucceed("Purchase completed succesfully")
            } else {
                notifyError("Please fill in all required fields")
            }
    }

    return (

        products.length === 0 ?

            <h2>Your cart is empty, click <Link to="/"><u>here</u></Link> to continue purchasing</h2>
            :
            purchaseId !== "" ?
                <>
                    <h2>Thank you for your purchase! Your order id is: {purchaseId}</h2>
                    <h3>Click <Link to="/" onClick={() => clear()}><u>here</u></Link> to continue!</h3>
                </>
                :
                <>
                    <div className="cart">
                        <h2>Your purchase</h2>
                        <div>
                            {products.map(product => (
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


                        <div className="cartForm">
                        <label htmlFor="name">Enter your name*</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="email">Enter your email*</label>
                            <input type="text" name="name" id="email" />
                            <label htmlFor="name">Enter your phone number</label>
                            <input type="text" name="name" id="phone" />
                            <button onClick={finishPurchase}>Complete purchase</button>
                        </div>

                    </div>
                </>
    )
}

export default Cart;