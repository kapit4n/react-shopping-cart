import { SHOW_ALL } from "./actions";

const initialState = {
  visibilityFilter: SHOW_ALL,
    products: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8"],
  product: "THis is the product",
  productShow: "THis is product displayed",
  cartInfo: {products: ["product2", "product3"], total: 12}
};

export function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    // For now, don't handle any actions
    // and just return the state given to us.
    return state
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        default:
            return state
    }
}