import { combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './card';
const rootReducer = combineReducers({
    card: cardReducer
})

let store = configureStore({
    reducer: rootReducer
})

export default store;