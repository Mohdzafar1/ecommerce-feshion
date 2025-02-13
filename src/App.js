import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Support from './pages/Support';
import Footer from './components/Footer';
import Details from './pages/details/Details';
import CartPage from './pages/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/:id" element={<Details/>} />

    </Routes>
    <Footer/>
  </BrowserRouter>
  <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
