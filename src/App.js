import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, {useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    // We need to wrap all those components under CartProvider who need access to the cart. 
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
