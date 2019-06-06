import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter
const getProducts = (state) => state.products

export const getVisibleProducts = createSelector(
    [getVisibilityFilter, getProducts],
    (visibilityFilter, products) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return products
            case 'SHOW_COMPLETED':
                return products.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return products.filter(t => !t.completed)
            default:
                return products
        }
    }
)