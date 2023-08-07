import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ILoginState {
    isAuth: boolean
}

const initialState: ILoginState = {
    isAuth: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginFlagTrue(state) {
            state.isAuth = true
        },
        setLoginFlagFalse(state) {
            state.isAuth = false
        }
    }
});

export const {setLoginFlagFalse, setLoginFlagTrue} = loginSlice.actions;

export default loginSlice.reducer;

export const loginSelector = (state: RootState) => ({isAuth: state.login.isAuth});