import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.sass'
import type { AppProps } from 'next/app'
import React, {FC} from 'react';
import {wrapper} from "../store";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default MyApp

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);