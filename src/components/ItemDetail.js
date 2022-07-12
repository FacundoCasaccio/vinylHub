import { useState } from 'react';
import CompletePurchase from './CompletePurchase';
import ItemCount from './ItemCount';
import "./styles/ItemDetail.css";

const ItemDetail = ({item}) => {
    const {id, name, artist, year, source, stock, price} = item;
    const [addedItems, setAddedItems] = useState(false);

    const notify = (message) => {
        console.log(message);
    }

    const onItemsAdded = () => {
        setAddedItems(true);
    }

    return (
        <div className="itemDetail">
            <div>
                <img src={source} alt="Album cover photo" />
            </div>
            <div className='itemInfo' onClick={onItemsAdded}>
                <h2>{name}</h2>
                <span>{artist} - {year}</span>
                <span>${price}</span>
                {
                    !addedItems ?
                    <ItemCount stock={25} initial={1} onAdd={notify} productName={name} />
                    : <CompletePurchase />
                }
            </div>
        </div>
    );
};

export default ItemDetail;