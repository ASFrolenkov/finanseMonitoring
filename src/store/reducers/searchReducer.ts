import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ISearchState {
    value: string;
}

const initialState: ISearchState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearchState(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
    }
});

export const {changeSearchState} = searchSlice.actions

export default searchSlice.reducer

export const searchSelector = (state: RootState) => ({value: state.search.value})