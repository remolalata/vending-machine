import { configureStore, combineReducers } from '@reduxjs/toolkit'
import commonReducer from './slices/common';
import orderReducer from './slices/order';

const reducer = combineReducers({
    common: commonReducer,
    order: orderReducer
})

const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof reducer>;

export default store;