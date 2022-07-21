import { useEffect, useState } from "react";
import { getItem } from "../mocks/albumsApi";
import ItemDetail from "../components/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    const {id} = useParams();  

    useEffect( () => {
        const productsCollection = collection(db, "ItemCollection");
        const referenceDoc = doc(productsCollection, id);
        getDoc(referenceDoc)
        .then( result => {
            const product = result.data();
            product.id = result.id;
            setItem(product);
        })
    }, []);

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;