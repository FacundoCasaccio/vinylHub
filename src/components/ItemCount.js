import { useState } from "react";
import "./styles/ItemCount.css";


const ItemCount = ( {stock, initial, onAdd, productName} ) => {
 
    const [itemCounter, setItemCounter] = useState(initial);
    const [availableStock, setAvailableStock] = useState(stock);
    
    const addItem = (e) => {
        itemCounter < availableStock ? setItemCounter(itemCounter + 1) : onAdd("Not enough stock");
        e.stopPropagation();
    }

    const removeItem = (e) => {
        itemCounter > 1 ? setItemCounter(itemCounter - 1) : onAdd("Action cannot be performed");
        e.stopPropagation();
    }

    const addToCart = () => {
        if (availableStock > 0) {
            onAdd(itemCounter);
            setAvailableStock(availableStock - itemCounter);
            setItemCounter(1);
        } else console.log("Items cannot be added to cart... out of stock");
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