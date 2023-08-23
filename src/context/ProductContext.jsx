import { useReducer, createContext } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducers.js";
const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const changeName = (value) => {
    dispatch({ type: "CHANGE_NAME", value: value });
  };

  const changePrice = (value) => {
    dispatch({ type: "CHANGE_PRICE", value: value });
  };

  const context = {
    ...state,
    handlerPlus,
    handlerMinus,
    changeName,
    changePrice,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
