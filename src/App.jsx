import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";
import Navbar from "./components/navbar";
import About from "./pages/aboutPage";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
