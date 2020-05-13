import { combineReducers } from "redux";
import { productsOriginal } from "./productData"
const initialState = {
  products: productsOriginal,
  product: "This is the product",
  productShow: "THis is product displayed",
  cartInfo: {
    products: [{
      id: 1,
      name: "Lamborghini Aventador",
      price: 450000,
      quantity: 1,
      img:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/share%20img/aventador-coupe-facebook-og.jpg",
      description:
        "What are the fastest automobiles on the planet? CBS Miami took a spin and crunched the numbers for us, producing this list of the slickest speedsters on the road. You may be surprised by some of the names on this list, but one thing that is no surprise is the inclusion of Lamborghini. The venerable Italian carmaker has a reputation for speed, and their Aventador is the best of the bunch. The Lamborghini Aventador can reach a speed of 220 mph, and go from 0 to 60 in 2.9 secs."
    }],
    total: 1 * 20,
    display: true
  }
};

export function todoApp(state = initialState, action) {
  const reducer = (accumulator, currentValue) => {
    if (typeof accumulator == "number") {
      return (
        accumulator + Number(currentValue.quantity) * Number(currentValue.price)
      );
    } else {
      return (
        Number(accumulator.quantity) * Number(accumulator.price) +
        Number(currentValue.quantity) * Number(currentValue.price)
      );
    }
  };
  let cartTotal = 0;

  switch (action.type) {
    case "SHOW_PRODUCT":
      return {
        ...state,
        productShow: action.product,
      };
    case "SEARCH_PRODUCTS":
      return {
        ...state,
        products: [...productsOriginal.filter(x => {
          if (action.value) {
            return x.name.toLowerCase().includes(action.value.toLowerCase())
          }
          return true;
        })]
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(pro => pro != action.product),
      };
    case "DISPLAY_CART_INFO":
      return {
        ...state,
        cartInfo: { ...state.cartInfo, display: true }
      };
    case "HIDE_CART_INFO":
      return {
        ...state,
        cartInfo: { ...state.cartInfo, display: false }
      };
    case "REMOVE_FROM_CART":
      let cartProducts = [
        ...state.cartInfo.products.filter(p => p.name != action.product.name)
      ];
      if (cartProducts.length > 1) {
        cartTotal = cartProducts.reduce(reducer);
      } else if (cartProducts.length == 1) {
        cartTotal =
          Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
      }
      return {
        ...state,
        cartInfo: {
          ...state.cartInfo,
          products: cartProducts,
          total: cartTotal
        }
      };
    case "CHECKOUT_CART":
      return {
        ...state,
        cartInfo: {
          ...state.cartInfo,
          products: [],
          total: 0
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

        let cartProducts = [...noSelected, selected];
        if (cartProducts.length > 1) {
          cartTotal = cartProducts.reduce(reducer);
        } else if (cartProducts.length == 1) {
          cartTotal =
            Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
        }
        return {
          ...state,
          cartInfo: {
            ...state.cartInfo,
            products: cartProducts,
            total: cartTotal
          }
        };
      } else {
        let p = action.product;
        p.quantity = 1;
        let cartProducts = [...state.cartInfo.products, p];
        if (cartProducts.length > 1) {
          cartTotal = cartProducts.reduce(reducer);
        } else if (cartProducts.length == 1) {
          cartTotal =
            Number(cartProducts[0].quantity) * Number(cartProducts[0].price);
        }

        return {
          ...state,
          cartInfo: { ...state.cartInfo, products: cartProducts, total: cartTotal }
        };
      }
    default:
      return state;
  }
}

export default combineReducers({
  todoApp
});
