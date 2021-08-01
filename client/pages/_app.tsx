import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.sass'
import type { AppProps } from 'next/app'
import React, {FC} from 'react';
import withRedux from "next-redux-wrapper";
import { makeStore } from '../redux/store';

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
  // <Provider store={store()}>
    <Component {...pageProps} />
  // {/*</Provider>*/}
);

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore)

export default withRedux(makeStore)( MyApp );