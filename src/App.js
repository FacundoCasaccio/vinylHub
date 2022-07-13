import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartCustomProvider from './context/CartContext';
function App() {

  return (
    <BrowserRouter>
      <CartCustomProvider>
      <NavBar />
        <main>
          <Routes>
              <Route path="/" element={<ItemListContainer greeting="There are no available products to display at the moment" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting="There are no available products to display at the moment" />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;
