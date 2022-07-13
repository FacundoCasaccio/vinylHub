import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { getProducts } from "../mocks/albumsApi";
import { useParams } from 'react-router-dom'


const ItemListContainer = ( {children, greeting} ) => {

    const [productList, setProductList] = useState([]);
    const [load, setLoad] = useState(true);

    const { categoryId } = useParams();

    useEffect( () => {
        getProducts(categoryId)
        .then( (result) => setProductList(result ) )
        .catch( () => console.log("Error retrieving products"))
        .finally( () => setLoad(false) );
    }, [categoryId]);

    return (
        <section className="itemList">
            {/* //<p> {greeting} </p> */}
            {load ? <span>Loading products...</span> : <ItemList productList={productList} /> }
            {children}
        </section>
    )
}

export default ItemListContainer;