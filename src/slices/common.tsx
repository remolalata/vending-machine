import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorType {
    hasError: boolean,
    type?: string | undefined,
    errorLabel?: string
}

interface CommonType {
    loading: boolean,
    error: ErrorType
}

const initialState: CommonType = {
    loading: false,
    error: {
        hasError: false,
        type: '',
        errorLabel: ''
    }
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<ErrorType>) => {
            if (action.payload.hasError) {
                state.error.hasError = true;
                state.error.type = action.payload.type;
                state.error.errorLabel = action.payload.errorLabel;
            } else {
                state.error.hasError = false;
                state.error.type = undefined;
                state.error.errorLabel = '';
            }
        }
    }
});

export const { setLoading, setError } = commonSlice.actions;
export default commonSlice.reducer;