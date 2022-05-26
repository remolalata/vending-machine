import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Home } from '../../views/index';
import store from '../../store';
import reducer, { setBalance, removeBalance, buyProduct, setChange } from '../../slices/order';

test('it will render products', () => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    );

    const products = screen.getAllByRole('product');
    expect(products).toBeTruthy();
});

test('it will handle add balance', () => {
    const previousState = {
        balance: 0,
        change: 0
    }

    expect(reducer(previousState, setBalance(1))).toEqual({
        balance: 1,
        change: 0
    })
});

test('it will handle reset balance', () => {
    const previousState = {
        balance: 2,
        change: 0
    }

    expect(reducer(previousState, removeBalance())).toEqual({
        balance: 0,
        change: 0
    })
});

test('it will handle buying the product', () => {
    const previousState = {
        balance: 4,
        change: 0
    }

    expect(reducer(previousState, buyProduct(2))).toEqual({
        balance: 0,
        change: 2
    })
});

test('it will handle collecting the change', () => {
    const previousState = {
        balance: 0,
        change: 2
    }

    expect(reducer(previousState, setChange(0))).toEqual({
        balance: 0,
        change: 0
    })
});
