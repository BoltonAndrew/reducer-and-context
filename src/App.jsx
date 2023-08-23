import Product from "./components/Product.jsx";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <header>
        <h1>State Management</h1>
        <h2>useReducer and/or useContext</h2>
      </header>
      <Product />
      <footer>
        <h3>Created By Andy Bolton</h3>
      </footer>
    </div>
  );
}

export default App;
