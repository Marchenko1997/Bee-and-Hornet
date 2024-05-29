// import  PopUp  from "./components/PopUp/PopUp";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Product from "./components/HoneyPopup/Product/Product";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
      <Product />
    </div>
    </Provider>
  );
}

export default App;
