import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userReducer.actions

export default userReducer.reducer

export const fetchWeaponsThunk = (): AppThunk => async dispatch => {
  try {
    await setTimeout(() => console.log('test async'), 3000)
    dispatch(userReducer.actions.increment());
  } catch (err) {
    // return dispatch(weaponsReducer.actions.failure());
  }
};

