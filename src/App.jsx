import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./routes/home/hoem.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout.component";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
