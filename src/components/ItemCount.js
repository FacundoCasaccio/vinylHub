import { useState } from "react";
import "./styles/ItemCount.css";


const ItemCount = ( {stock, initial, onAdd, productName} ) => {
 
    const [itemCounter, setItemCounter] = useState(initial);
    const [availableStock, setAvailableStock] = useState(stock);
    
    const addItem = () => {
        if(availableStock > 1) {
            setItemCounter(itemCounter + 1);
            setAvailableStock(availableStock - 1);
        } else {
            onAdd("Out of stock");
        }
    }

    const removeItem = () => {
        if(itemCounter > 1) {
            setItemCounter(itemCounter - 1);
            setAvailableStock(availableStock + 1);
        } else {
            onAdd("Action cannot be performed")
        }
    }

    const addToCart = () => {
        onAdd(`${itemCounter} items added to cart`);
        setItemCounter(1);
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