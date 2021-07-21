import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import { createStore } from "redux";
import {reducer, rootReducer, RootState} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer,
  );

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
