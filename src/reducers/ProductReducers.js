export const defaultProduct = {
  count: 1,
  discount: 0,
  name: "Banana",
  price: 2.99,
};

export function productReducer(state, action) {
  switch (action.type) {
    case "PLUS_COUNT": {
      let newState = { ...state };
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState;
    }
    case "MINUS_COUNT": {
      let newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 5) {
        newState.discount = 0;
      }
      if (newState.count < 0) newState.count = 0;
      return newState;
    }
    case "CHANGE_NAME": {
      return { ...state, name: action.value };
    }
    case "CHANGE_PRICE": {
      return { ...state, price: action.value };
    }
    default:
      throw Error("productReducer: unknown action:" + action.type);
  }
}

// Dificult to read control flow
// export function productReducer(state, action) {
//   console.log(state, action);
//   if (action.type === "PLUS_COUNT") {
//     let newState = { ...state };
//     newState.count = state.count + 1;
//     if (newState.count >= 5) {
//       newState.discount = 20;
//     }
//     return newState;
//   } else if (action.type === "MINUS_COUNT") {
//     let newState = { ...state };
//     newState.count = state.count - 1;
//     if (newState.count < 0) {
//       newState.count = 0;
//     }
//     if (newState.count < 5) {
//       newState.discount = 0;
//     }
//     return newState;
//   } else if (action.type === "CHANGE_NAME") {
//     let newState = { ...state };
//     newState.name = action.value;
//     return newState;
//   } else if (action.type === "CHANGE_PRICE") {
//     let newState = { ...state };
//     newState.price = parseInt(action.value);
//     return newState;
//   } else {
//     throw new Error("Incorrect Action Type");
//   }
// }
