import React, {createContext, useEffect, useState} from 'react';

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);
    const [productsQuantity, setProductsQuantity] = useState(0);

    const getProductsQuantity = () => {
        let quantity = 0;
        products.forEach( product => {
            quantity += product.quantity
        });
        setProductsQuantity(quantity);
    }

    useEffect( () => {
        getProductsQuantity();
    }, [products]);

    const addProduct = (product) => {
        if (isInCart(product.id)) {
            const found = products.find( prod => prod.id === product.id);
            const foundProductIndex = products.indexOf(found);
            const auxProducts = [...products];
            auxProducts[foundProductIndex].quantity += product.quantity;
            setProducts(auxProducts);
        } else {
            setProducts([...products, product]);
        }
    }

    const removeProduct = (id) => {
        setProducts( products.filter( product => product.id !== id ) );
        setProductsQuantity();
    }

    const clear = () => {
        setProducts([]);
        setProductsQuantity(0);
    }

    const isInCart = (id) => {
        return products.some( product => product.id === id );
    }

    return (
        <Provider value={{products, addProduct, removeProduct, clear, productsQuantity}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;