import { SHOW_ALL } from "./actions";

const initialState = {
  visibilityFilter: SHOW_ALL,
    products: ["Product 1", "Product 2", "Product 1", "Product 2", "Product 1", "Product 2", "Product 1", "Product 2"],
  product: "THis is the product",
  productShow: "THis is product displayed"
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