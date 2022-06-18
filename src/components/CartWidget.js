import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const CartWidget = ( {products} ) => {

    products = products == undefined ? 0 : products;

    return (
        <>
            <ShoppingBagIcon className='icon'/>
            <span> {products} </span>
        </>

    )
}

export default CartWidget;