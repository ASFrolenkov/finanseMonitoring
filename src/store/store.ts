import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer  from "./reducers/searchReducer";
import dataReducer from "./reducers/dataReducer";
import loginReducer from './reducers/loginSlice'

const rootReducer = combineReducers({
    search: searchReducer,
    data: dataReducer,
    login: loginReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;