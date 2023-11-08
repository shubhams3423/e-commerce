import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
