import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = ( {children} ) => {

    const [productList, setProductList] = useState([]);
    const [load, setLoad] = useState(true);
    const { categoryId } = useParams();

    useEffect( () => {
        const productsCollection = collection(db, 'ItemCollection');
        const categoryQuery = categoryId && query(productsCollection, where("category", "==", categoryId));
         
        getDocs(categoryId ? categoryQuery : productsCollection)
        .then( result => {
            const itemList = result.docs.map( item => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            setProductList(itemList);
        })
        .catch( () => console.log("Error retrieving products"))
        .finally( () => setLoad(false) );
    }, [categoryId]);

    return (
        <section className="itemList">
            {load ? <span>Loading products...</span> : <ItemList productList={productList} /> }
            {children}
        </section>
    )
}

export default ItemListContainer;