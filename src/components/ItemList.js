import Item from "./Item";
import "./styles/ItemList.css";

const ItemList = ({ productList }) => {

    return (
        <div className="productList">
            {productList.map( (product) => <Item key={product.id} product={product} /> )}
        </div>
    )

}

export default ItemList;