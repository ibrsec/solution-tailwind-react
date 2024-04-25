import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Blog from "./pages/Blog.jsx";
import Pricing from "./pages/Pricing.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product-detail" element={<ProductDetail />} />
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
