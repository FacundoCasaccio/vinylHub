import { useState } from "react";
import "./styles/ItemCount.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ( {stock, initial, onAdd, productName} ) => {
 
    const [itemCounter, setItemCounter] = useState(initial);
    const [availableStock, setAvailableStock] = useState(stock);
    const notify = (message) => toast.error(message);
    
    const addItem = (e) => {
        itemCounter < availableStock ? setItemCounter(itemCounter + 1) : notify("Not enough stock");
    }

    const removeItem = (e) => {
        itemCounter > 1 ? setItemCounter(itemCounter - 1) : notify("Action cannot be performed");
    }

    const addToCart = () => {
        if (availableStock > 0) {
            onAdd(itemCounter);
            setAvailableStock(availableStock - itemCounter);
            setItemCounter(1);
        } else notify("Items cannot be added to cart... out of stock");
    }

    return (
        <div  className="itemCount">
            <span>{productName}</span>
            <div className="quantityController">
                <button onClick={removeItem}>-</button>
                <span>{itemCounter}</span>
                <button onClick={addItem}>+</button>
            </div>
            <button onClick={addToCart} className="addToCartButton">Add to cart</button>
        </div>
    )
}

export default ItemCount;