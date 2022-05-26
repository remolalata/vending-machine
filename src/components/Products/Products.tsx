import {
    Grid
} from '@mui/material';
import { Product } from '../index';
import { ProductType } from '../../utils/types';

interface PropType {
    data: ProductType[]
}

export const Products = ({ data }: PropType) => {
    return (
        <Grid container spacing={2}>
            {data.map(product => (
                <Grid item key={product?.id} md={4}>
                    <Product
                        id={product?.id}
                        productName={product?.productName}
                        price={product?.price}
                        image={product?.image}
                    />
                </Grid>
            ))}
        </Grid>
    )
}