import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import CartContext from './Context/CartContext';

export default function Layout() {
    const [cart, setCart] = useState([]);   
    return <div>

        <Header />

        <CartContext.Provider value={{ cart, setCart }}>
            <Main />
            {/* <Cart /> */}
        </CartContext.Provider>
    </div>;
}