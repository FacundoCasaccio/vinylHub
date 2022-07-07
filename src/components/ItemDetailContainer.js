import { useEffect, useState } from "react";
import { getItem } from "../mocks/albumsApi";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ( ) => {
    
    const [item, setItem] = useState({});
    const {id} = useParams();  

    useEffect( () => {
        getItem(id - 1)
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