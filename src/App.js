import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import LikedProduct from "./LikedProduct/LikedProduct";
import User from "./User/User";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/likedProducts" element={<LikedProduct />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
