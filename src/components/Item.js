import "./styles/Item.css";
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    const {id, name, artist, year, source} = product;

    return (
        <div className="productCard">
            <img src={source} alt={name + " cover photo"} />
            <span className="albumTitle">{name}</span>
            <span className="albumInfo">{artist} - {year}</span>
            <Link to={`/detail/${id}`}>
                <button className="detailsButton">View details</button>
            </Link>

        </div>
    );
}

export default Item;