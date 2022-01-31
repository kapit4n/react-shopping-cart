import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { getAllProducts } from './actions'
import Root from "./Root";
import { createLogger } from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

render(
    <Root store={store} />,
    document.getElementById('root')
)
