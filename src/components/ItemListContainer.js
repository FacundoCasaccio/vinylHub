import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mocks/albumsApi";


const ItemListContainer = ( {children, greeting} ) => {

    const [productList, setProductList] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect( () => {
        getProducts
        .then( (result) => setProductList(result ) )
        .catch( () => console.log("Error retrieving products"))
        .finally( () => setLoad(false) );
    }, []);

    return (
        <section className="itemList">
            {/* //<p> {greeting} </p> */}
            {load ? <span>Loading products...</span> : <ItemList productList={productList} /> }
            {children}
        </section>
    )
}

export default ItemListContainer;