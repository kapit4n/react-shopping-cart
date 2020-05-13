export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const initialState = {
  visibilityFilter: "SHOW_ALL",
  products: [
    "Product 1",
    "Product 2",
    "Product 6",
    "Product 7",
    "Product 8"
  ],
  productsOriginal: [],
  product: "THis is the product",
  productShow: "THis is product displayed",
  cartInfo: { products: ["product2", "product3"], total: 2 }
};

export const SHOW_ALL = "SHOW_ALL";

export const PRODUCT_TO_CART = "PRODUCT_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const HIDE_CART_INFO = "HIDE_CART_INFO";
export const DISPLAY_CART_INFO = "DISPLAY_CART_INFO";
export const CHECKOUT_CART = "CHECKOUT_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SHOW_PRODUCT = "SHOW_PRODUCT";

export const addToCart = product => dispatch => {
  dispatch({ type: PRODUCT_TO_CART, product });
};

export const removeFromCart = product => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, product });
};

export const displayCartInfo = () => dispatch => {
  dispatch({ type: DISPLAY_CART_INFO });
};

export const hideCartInfo = () => dispatch => {
  dispatch({ type: HIDE_CART_INFO });
};

export const checkoutCart = products => dispatch => {
  dispatch({ type: CHECKOUT_CART, products })
}

export const showProduct = product => dispatch => {
  dispatch({ type: SHOW_PRODUCT, product });
};

export const addProduct = ({ product }) => dispatch => {
  console.log("ADD PRODUCT iiiiiiiiiiiiiiiiiiiiiii")
  console.log(product);

  dispatch({ type: ADD_PRODUCT, product });
};

export const searchProducts = searchValue => dispatch => {
  dispatch({ type: SEARCH_PRODUCT, searchValue });
};

export const removeProduct = product => dispatch => {
  dispatch({ type: REMOVE_PRODUCT, product });
};

const receiveProducts = products => ({
  type: SHOW_ALL,
  products: products
});

export const getAllProducts = () => dispatch => {
  dispatch(receiveProducts(initialState));
};
