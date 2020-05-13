export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SHOW_ALL = "SHOW_ALL";

export const PRODUCT_TO_CART = "PRODUCT_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const HIDE_CART_INFO = "HIDE_CART_INFO";
export const DISPLAY_CART_INFO = "DISPLAY_CART_INFO";
export const CHANGE_DISPLAY_CART_MODE = "CHANGE_DISPLAY_CART_MODE";
export const CHECKOUT_CART = "CHECKOUT_CART";

export const HIDE_FILTERS = "HIDE_FILTERS";
export const DISPLAY_FILTERS = "DISPLAY_FILTERS";


export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const addToCart = product => dispatch => {
  dispatch({ type: PRODUCT_TO_CART, product });
};

export const removeFromCart = product => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, product });
};

export const searchProducts = searchText => dispatch => {
  dispatch({ type: SEARCH_PRODUCTS, value: searchText });
};

export const changeDisplayCartMode = () => dispatch => {
  dispatch({ type: CHANGE_DISPLAY_CART_MODE });
};

export const displayFilters = () => dispatch => {
  dispatch({ type: DISPLAY_FILTERS });
};

export const hideFilters = () => dispatch => {
  dispatch({ type: HIDE_FILTERS });
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
  dispatch({ type: ADD_PRODUCT, product });
};

export const removeProduct = product => dispatch => {
  dispatch({ type: REMOVE_PRODUCT, product });
};

const receiveProducts = () => ({
  type: SHOW_ALL,
});

export const getAllProducts = () => dispatch => {
  dispatch(receiveProducts());
};
