import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.count -= action.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} = counterSlice.actions

export default counterSlice.reducer