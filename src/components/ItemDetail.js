import ItemCount from './ItemCount';
import "./styles/ItemDetail.css";

const ItemDetail = ({item}) => {
    const {id, name, artist, year, source, stock, price} = item;
    let availableStock = Number.parseInt(stock) + 20;  

    const notify = (message) => {
        console.log(message);
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
                <ItemCount stock={25} initial={1} onAdd={notify} productName={name} />
            </div>
        </div>
    );
};

export default ItemDetail;