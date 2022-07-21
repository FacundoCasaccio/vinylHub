import { useContext, useState } from 'react';
import CompletePurchase from './CompletePurchase';
import ItemCount from './ItemCount';
import "./styles/ItemDetail.css";
import { cartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
    const {id, name, artist, year, source, stock, price} = item;
    const [addedItems, setAddedItems] = useState(false);

    const { addProduct } = useContext(cartContext);

    const onItemsAdded = (count) => {
        addProduct({...item, quantity: count});
        setAddedItems(true);
    }

    return (
        <div className="itemDetail">
            <div>
                <img src={source} alt="Album cover photo" />
            </div>
            <div className='itemInfo'>
                <h2>{name}</h2>
                <span>{artist} - {year}</span>
                <span>${price}</span>
                {
                    !addedItems ?
                    <ItemCount stock={25} initial={1} onAdd={onItemsAdded} productName={name} />
                    : <CompletePurchase />
                }
            </div>
        </div>
    );
};

export default ItemDetail;