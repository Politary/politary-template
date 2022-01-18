import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    // reducer: nameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
