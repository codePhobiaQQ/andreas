import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { IUser } from "../../models/IUser";
import UserServices from "../../services/user.services";
import AuthServices from "../../services/auth.services";
import { setLoading } from "./AppSlice";

export interface CounterState {
  value: number;
  isAuth: boolean;
  user: IUser;
}

const initialState: CounterState = {
  value: 0,
  isAuth: false,
  user: {} as IUser,
};

export const isLogged = createAsyncThunk("logged", async (_, thunkAPI) => {
  try {
    const response = await UserServices.logged();
    const user = response.data;
    thunkAPI.dispatch(setUser(user));
    thunkAPI.dispatch(setLoading(false));
    return user;
  } catch (e) {
    console.log(e);
    thunkAPI.dispatch(setLoading(false));
  }
});

export const Logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    const response = await AuthServices.logout();
    thunkAPI.dispatch(setUser({} as IUser));
    localStorage.removeItem("token");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isLogged.fulfilled, (state, action) => {});
    builder.addCase(Logout.fulfilled, (state, action) => {
      state.isAuth = false;
    });
  },
});

export const { increment, decrement, incrementByAmount, setUser } =
  userReducer.actions;

export default userReducer.reducer;
