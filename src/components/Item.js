import "./styles/Item.css";

const Item = ({product}) => {

    const {name, artist, year, source} = product;

    return (
        <div className="productCard">
            <img src={source} alt={name + " cover photo"} />
            <span className="albumTitle">{name}</span>
            <span className="albumInfo">{artist} - {year}</span>
            <button className="detailsButton">View details</button>
        </div>
    );
}

export default Item;