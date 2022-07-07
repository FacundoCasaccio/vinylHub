import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {

  const notify = (message) => {
    console.log(message);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="There are no available products to display at the moment" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="There are no available products to display at the moment" />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
