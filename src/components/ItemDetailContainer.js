import { useEffect, useState } from "react";
import { getItem } from "../mocks/albumsApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ( {itemId} ) => {
    
    const [item, setItem] = useState({});

    useEffect( () => {
        getItem(itemId)
        .then( (result) => setItem(result) )
        .catch( () => console.log("Error retrieving item"));
    }, []);

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;