import { combineReducers } from "redux";

const initialState = {
  products: [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ],
  product: "THis is the product",
  productShow: "THis is product displayed",
  cartInfo: { products: [{ id: 1, name: "Product 1", quantity: 1 }], total: 1 }
};

function addToCart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, action.product);
    case "PRODUCT_TO_CART":
      if (state.some(p => p == action.product)) {
        let car = state.find(p => p == action.product);
      } else {
        return Object.assign({}, ...state, action.product);
      }
    default:
      return state;
  }
}

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case "SHOW_PRODUCT":
      return {
        products: [...state.products, action.product],
        product: action.product,
        productShow: state.productShow,
        cartInfo: state.cartInfo
      };
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.product],
        product: state.product,
        productShow: state.productShow,
        cartInfo: state.cartInfo
      };
    case "REMOVE_PRODUCT":
      return {
        products: state.products.filter(pro => pro != action.product),
        product: state.product,
        productShow: state.productShow,
        cartInfo: state.cartInfo
      };
    case "REMOVE_FROM_CART":
      return {
        products: state.products,
        product: state.product,
        productShow: state.productShow,
        cartInfo: {
          products: [
            ...state.cartInfo.products.filter(
              p => p.name != action.product.name
            )
          ],
          total: state.cartInfo.total - action.product.quantity
        }
      };
    case "PRODUCT_TO_CART":
      if (state.cartInfo.products.some(p => p.name == action.product.name)) {
        let selected = state.cartInfo.products.find(
          p => p.name == action.product.name
        );
        selected.quantity += 1;
        let noSelected = state.cartInfo.products.filter(
          p => p.name != action.product.name
        );
        return {
          products: state.products,
          product: state.product,
          productShow: state.productShow,
          cartInfo: {
            products: [...noSelected, selected],
            total: state.cartInfo.total + 1
          }
        };
      } else {
        let p = action.product;
        p.quantity = 1;
        return {
          products: state.products,
          product: state.product,
          productShow: state.productShow,
          cartInfo: {
            products: [...state.cartInfo.products, p],
            total: state.cartInfo.total + 1
          }
        };
      }
    case "SEARCH_PRODUCT":
      return {
        products: state.products.filter(p => p == action.searchValue),
        product: state.product,
        productShow: state.productShow,
        cartInfo: {
          products: [...state.cartInfo.products],
          total: state.cartInfo.total
        }
      };
    default:
      return state;
  }
}

export default combineReducers({
  todoApp
});
