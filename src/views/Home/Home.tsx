import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setError } from '../../slices/common';
import { setBalance, removeBalance } from '../../slices/order';
import {
    Grid,
    Container
} from '@mui/material';
import { Products, Sidebar } from '../../components/';
import { PRODUCTS } from '../../utils/constants';

const acceptedAmount: number[] = [0.10, 0.20, 0.50, 1, 2];

export const Home = () => {

    const [amount, setAmount] = useState<any>(0);
    const order = useSelector((state: RootState) => state.order);
    const dispatch = useDispatch();

    const handleInsertMoney = () => {
        // @ts-ignore: Unreachable code error
        if (/^(\d+(\.\d+)?)$/.test(parseFloat(amount))) {
            if (acceptedAmount.includes(parseFloat(amount))) {
                dispatch(setBalance(parseFloat(amount)));
                dispatch(setError({ hasError: false }));
            } else {
                dispatch(setError({
                    hasError: true,
                    type: 'error',
                    errorLabel: 'Machine only accepts 10c, 20c, 50c, $1 or $2'
                }));
            }
        } else {
            dispatch(setError({
                hasError: true,
                type: 'error',
                errorLabel: 'Invalid number'
            }));
        }

        setAmount(0);
    }

    const handleClearBalance = () => {
        dispatch(removeBalance());
        setAmount(0);
        dispatch(setError({ hasError: false }));
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event?.target?.value;
        setAmount(value);
    }

    return (
        <Container
            sx={{
                my: 10
            }}
        >
            <Grid container spacing={5}>
                <Grid item md={9}>
                    <Products data={PRODUCTS} />
                </Grid>
                <Grid item md={3}>
                    <Sidebar
                        amount={amount}
                        balance={order.balance}
                        change={order.change}
                        onAddBalance={handleInsertMoney}
                        onRemoveBalance={handleClearBalance}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}