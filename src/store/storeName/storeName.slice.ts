import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
};

const titleSlice = createSlice({
    name: 'title',
    initialState: initialState,
    reducers: {
        getSomething: (state, action:PayloadAction<any>) => {
            state = 'done';
        },
        getSomethingSuccess: (state, action) => {
            state = 'done';
        },
        getSomethingFailure: (state, action) => {
            state = 'done';
        }
    },
});

export default titleSlice.reducer;
export const { getSomething, getSomethingSuccess, getSomethingFailure } =
    titleSlice.actions;
