import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to={"/bingo-shop"} replace />} />
        <Route path="/bingo-shop" element={<ProductsPage />} />
        <Route path="/bingo-shop/checkout" element={<CheckoutPage />} />
        <Route path="/bingo-shop/products/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
