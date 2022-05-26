import { useDispatch } from 'react-redux';
import { setChange } from '../../slices/order';
import {
    Box,
    TextField,
    Button,
    styled,
    Typography
} from '@mui/material';

const ButtonWrapper = styled(Box)({
    margin: '20px 0',
    '& .MuiButton-root:first-of-type': {
        marginBottom: '20px'
    }
});

const CustomChange = styled(Typography)({
    width: '100%',
    lineHeight: '50px',
    border: 'solid 1px gray',
    textAlign: 'center',
    borderRadius: '8px',
    opacity: '0.8',
    pointerEvents: 'none',
    marginBottom: '20px'
})

interface PropType {
    amount: number | string,
    balance?: number,
    change?: number,
    onAddBalance?: () => void,
    onRemoveBalance?: () => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Sidebar = ({
    amount,
    change,
    balance,
    onAddBalance,
    onRemoveBalance,
    onChange
}: PropType) => {

    const dispatch = useDispatch();

    return (
        <Box>
            <Typography sx={{ fontWeight: 'bold', mb: 2 }} role='balanceField'>
                Balance: ${balance}
            </Typography>
            <TextField
                placeholder='Enter an amount of 10c, 20c, 50c, $1 or $2'
                value={amount ? amount : 0}
                onChange={onChange}
                fullWidth
            />
            <ButtonWrapper>
                <Button fullWidth variant='contained' size='large' onClick={onAddBalance}>Insert money</Button>
                <Button fullWidth variant='contained' size='large' onClick={onRemoveBalance}>Clear balance</Button>
            </ButtonWrapper>
            <CustomChange>{change}</CustomChange>
            <Button
                fullWidth
                variant='contained'
                size='large'
                disabled={change && change > 0 ? false : true}
                onClick={() => dispatch(setChange(0))}
            >Collect change</Button>
        </Box>
    )
}
