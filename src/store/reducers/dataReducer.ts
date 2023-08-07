import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ISingleDataElem {
    id: number | string,
    cardNumber: number,
    balance: number,
    spending: [
        {
            month: string,
            total: number,
            description: [
                {
                    name: string,
                    value: number
                }
            ]
        }
    ]
}

interface IDataState {
    allData: any,
    currentData: ISingleDataElem | null,
    currentDataId: number | null | string
}

const initialState: IDataState = {
    allData: [],
    currentData: null,
    currentDataId: null
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setAllDataToState(state, action: PayloadAction<any>) {
            state.allData = action.payload.data;
            state.currentData = action.payload.data[0]
            state.currentDataId = action.payload.data[0].id;
        },
        setCurrentDataAndId(state, action: PayloadAction<number | string | null>) {
            state.allData.forEach((elem: ISingleDataElem) => {
                if (action.payload === elem.id) {
                    state.currentData = elem;
                    state.currentDataId = action.payload;
                }
            })
        },
        changeBalanceOnCart(state, action: PayloadAction<{id: number | string, spending: number}>) {
            state.allData = state.allData.map((elem: ISingleDataElem) => {
                if (elem.id === action.payload.id) {
                    return {
                        ...elem,
                        balance: action.payload.spending
                    }
                }
                return {...elem}
            })
            if (state.currentData) {
                state.currentData.balance = action.payload.spending
            }
        }
    }
})

export const {setAllDataToState, setCurrentDataAndId, changeBalanceOnCart} = dataSlice.actions;

export default dataSlice.reducer;

export const dataSelector = (state: RootState) => (
    {
        allData: state.data.allData,
        currentDataId: state.data.currentDataId,
        currentData: state.data.currentData
    }
)