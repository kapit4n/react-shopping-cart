import { productsOriginal } from "./productData"

const initialState = {
  products: productsOriginal
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case "LIST":
      return {
        ...state
      };
    case "FILTER":
      return {
        ...state,
        filters: { ...state.filters, display: true },
      };
    case "HIDE_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, display: false },
      };
    case "SHOW_PRODUCT":
      return {
        ...state,
        productShow: action.product,
      };
    case "SEARCH_PRODUCTS":
      return {
        ...state,
        searchTerm: action.value,
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
        products: state.products.filter(pro => pro !== action.product),
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
        ...state.cartInfo.products.filter(p => p.name !== action.product.name)
      ];
      if (cartProducts.length > 1) {
        cartTotal = cartProducts.reduce(reducer);
      } else if (cartProducts.length === 1) {
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
      if (state.cartInfo.products.some(p => p.name === action.product.name)) {
        let selected = state.cartInfo.products.find(
          p => p.name === action.product.name
        );
        selected.quantity += 1;
        let noSelected = state.cartInfo.products.filter(
          p => p.name !== action.product.name
        );

        let cartProducts = [...noSelected, selected];
        if (cartProducts.length > 1) {
          cartTotal = cartProducts.reduce(reducer);
        } else if (cartProducts.length === 1) {
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
        } else if (cartProducts.length === 1) {
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
