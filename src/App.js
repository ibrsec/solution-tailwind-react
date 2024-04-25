import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from "./components/Footer.jsx";
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
//https://caddyflow-webflow-agency-lapa-fourteen.webflow.io/