// components
import { Routes, Route } from "react-router-dom";
import { Home, Shop, ShopItemPage, NotFound } from "@pages";
import Navbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ShopItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
