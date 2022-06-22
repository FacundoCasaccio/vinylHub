import { useState } from "react";
import "./styles/ItemCount.css";


const ItemCount = ( {stock, initial, onAdd, productName} ) => {
 
    const [itemCounter, setItemCounter] = useState(initial);
    const [availableStock, setAvailableStock] = useState(stock);
    
    const addItem = () => {
        itemCounter < availableStock ? setItemCounter(itemCounter + 1) : onAdd("Not enough stock");
    }

    const removeItem = () => {
        itemCounter > 1 ? setItemCounter(itemCounter - 1) : onAdd("Action cannot be performed");
    }

    const addToCart = () => {
        if (availableStock > 0) {
            onAdd(`${itemCounter} items added to cart`);
            setAvailableStock(availableStock - itemCounter);
            setItemCounter(1);
        } else onAdd("Items cannot be added to cart... out of stock");
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