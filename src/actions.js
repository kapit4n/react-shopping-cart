export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const initialState = {
  visibilityFilter: "SHOW_ALL",
  products: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8"],
  product: "THis is the product",
  productShow: "THis is product displayed",
  cartInfo: { products: ["product2", "product3"], total: 2 }
};

export const SHOW_ALL = "SHOW_ALL";

export const PRODUCT_TO_CART = "PRODUCT_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SHOW_PRODUCT = "SHOW_PRODUCT";

export const addToCart = product => dispatch => {
  dispatch({ type: PRODUCT_TO_CART, product });
}


export const removeFromCart = index => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, index });
}

export const showProduct = product => dispatch => {
  dispatch({ type: SHOW_PRODUCT, product });
}

export const addProduct = product => dispatch => {
  dispatch({ type: ADD_PRODUCT, product });
}

export const searchProducts = searchValue => dispatch => {
  console.log(searchValue);
  dispatch({ type: SEARCH_PRODUCT, searchValue });
};

export const removeProduct = product => dispatch => {
  dispatch({ type: REMOVE_PRODUCT, product });
}

const receiveProducts = products => ({
  type: SHOW_ALL,
  products: products
});

export const getAllProducts = () => dispatch => {
  dispatch(receiveProducts(initialState));
};
