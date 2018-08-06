import { combineReducers } from "redux";

const initialState = {
    visibilityFilter: "SHOW_ALL",
    products: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8"],
    product: "THis is the product",
    productShow: "THis is product displayed",
    cartInfo: { products: ["product2", "product3"], total: 12 }
};

function addToCart(state = initialState, action) {
  console.log("THIS IS REDUCEER");
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, action.product);
    default:
      return state;
  }
}

export function todoApp(state, action) {
    console.log("TODO APP");
    console.log("==============================================");
    console.log(state);
    console.log(action);
    if (typeof state === 'undefined') {
        return initialState
    }
    return state
}

export default combineReducers({
  todoApp
});
