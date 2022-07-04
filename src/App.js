import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const notify = (message) => {
    console.log(message);
  }

  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="There are no available products to display at the moment">
          {/* <ItemCount stock={5} initial={1}  onAdd={notify} productName={"Placeholder"} /> */}
        </ItemListContainer>
        <ItemDetailContainer itemId={0} />
      </main>
    </>
  );
}

export default App;
