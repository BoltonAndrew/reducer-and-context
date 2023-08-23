import Product from "./components/Product.jsx";
import style from "./App.module.css";
import { ProductProvider } from "./context/ProductContext.jsx";

function App() {
  return (
    <div className={style.App}>
      <header>
        <h1>State Management</h1>
        <h2>useReducer and/or useContext</h2>
      </header>
      <ProductProvider>
        <Product />
      </ProductProvider>
      <footer>
        <h3>Created By Andy Bolton</h3>
      </footer>
    </div>
  );
}

export default App;
