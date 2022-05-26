import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderType {
    balance: number
    change: number
}

const initialState: OrderType = {
    balance: 0,
    change: 0
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<number>) => {
            state.balance += action.payload
        },
        removeBalance: (state) => {
            state.balance = 0;
        },
        buyProduct: (state, action: PayloadAction<number>) => {
            // @ts-ignore: Unreachable code error
            state.change = +parseFloat(state.balance - action.payload).toFixed(2);
            state.balance = 0;
        },
        setChange: (state, action: PayloadAction<number>) => {
            state.change = action.payload
        }
    }
});

export const { setBalance, setChange, removeBalance, buyProduct } = orderSlice.actions;
export default orderSlice.reducer;