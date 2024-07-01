
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Product from "./components/HoneyPopup/Product/Product";
import OrderPage from "./components/OrderForm/OrderPage/OrderPage"; // Замените на нужный путь импорта
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
