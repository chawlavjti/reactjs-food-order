import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
<<<<<<< HEAD
//this is new comment
=======
//commit by chawlavjti in file directly on github
>>>>>>> ee0dfc4cc589fe77c56948e066c395654203b8da

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
