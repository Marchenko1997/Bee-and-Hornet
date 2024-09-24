import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OrderPage from "./pages/OrderPage/OrderPage";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
