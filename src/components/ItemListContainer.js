
const ItemListContainer = ( {children, greeting} ) => {
    return (
        <section className="itemList">
            <p> {greeting} </p>
            {children}
        </section>
    )
}

export default ItemListContainer;