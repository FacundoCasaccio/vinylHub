import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const CartWidget = ( {products} ) => {

    const {productsQuantity} = useContext(cartContext);

    return (
        <>
            <ShoppingBagIcon className='icon'/>
            {products.length != 0 && <span> {productsQuantity} </span>}
        </>

    )
}

export default CartWidget;