import { useState, useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card.jsx";
import ViewList from "./ViewList.jsx";
import { defaultProduct, productReducer } from "../reducers/ProductReducers.js";
import ProductContext from "../context/ProductContext.jsx";

function Product() {
  // const [count, setCount] = useState(1);
  // const [discount, setDiscount] = useState(0);
  // const [name, setName] = useState("Banana");
  // const [price, setPrice] = useState(2.99);

  // const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const ctx = useContext(ProductContext);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  // const handlerPlus = () => {
  //   dispatch({ type: "PLUS_COUNT" });
  //   // setCount((prevCount) => {
  //   //   let count = prevCount + 1;
  //   //   if (count >= 5) {
  //   //     setDiscount(20);
  //   //   }
  //   //   return count;
  //   // });
  // };
  // const handlerMinus = () => {
  //   dispatch({ type: "MINUS_COUNT" });
  //   // setCount((prevCount) => {
  //   //   let count = prevCount - 1;
  //   //   if (count < 5) {
  //   //     setDiscount(0);
  //   //   }
  //   //   if (count < 0) return 0;
  //   //   return count;
  //   // });
  // };

  // const handlerChangeName = (value) => {
  //   dispatch({ type: "CHANGE_NAME", value });
  // };
  // const handlerChangePrice = (value) => {
  //   dispatch({ type: "CHANGE_PRICE", value });
  // };
  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price: ", name, price);

    // Create new list item
    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    console.log("  newList:", newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log("  sumTotal:", sumTotal);
    setSumTotal(sum);
  };

  return (
    <div className={styles.container}>
      <Card handlerAddProduct={handlerAddProduct} />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
