import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Carts';
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CartProvider>

        < Header />

        <br/> <br/> <br/>

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/products" element={< Products />} />
          <Route path="/cart" element={< Cart />}/>
          <Route path="/payment" element={< Payment />} />
        </Routes>

        <br/> <br/> <br/>

        < Footer />

        </CartProvider>

        <div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
