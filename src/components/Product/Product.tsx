import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { buyProduct } from '../../slices/order';
import {
    Box,
    Button,
    Typography,
    styled
} from '@mui/material';
import { ProductType } from '../../utils/types';

const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiBox-root': {
        height: '250px',
        width: '100%',
        border: 'solid 1px lightgray',
        borderRadius: '8px',
        marginBottom: '10px'
    },
    '& .price': {
        margin: '10px 0'
    },
    '& img': {
        display: 'block',
        width: '100%',
        height: '100%'
    }
});

export const Product = ({ productName, price, image }: ProductType) => {

    const order = useSelector((state: RootState) => state.order);
    const dispatch = useDispatch();

    return (
        <CustomBox role='product'>
            <Box>
                <img src={image} alt={productName} />
            </Box>
            <Typography>{productName}</Typography>
            <Typography className='price'>{price}$</Typography>
            <Button
                variant='contained'
                fullWidth
                disabled={order.balance >= price ? false : true}
                onClick={() => dispatch(buyProduct(price))}
            >
                BUY
            </Button>
        </CustomBox>
    )
}