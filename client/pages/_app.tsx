import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.sass";
import "../styles/LoaderPage.css";
import type { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import { useDispatch } from "react-redux";
import { setUser, isLogged } from "../redux/slices/UserSlice";
import { setLoading } from "../redux/slices/AppSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import LoaderPage from "../components/LoaderPage";
import { useRouter } from "next/router";
import axios from "axios";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector((state) => state.app.isLoading);
  const route = useRouter();

  useEffect(() => {
    // (async function test() {
    //   const token = await axios.get("http://localhost:5000/token/test", {
    //     withCredentials: true,
    //   });
    //   console.log("token", token);
    // })();

    if (localStorage.getItem("token")) {
      dispatch(isLogged());
    } else {
      route.push("/");
      dispatch(setLoading(false));
    }
  }, []);

  if (isLoading) {
    return <LoaderPage />;
  }

  return <Component {...pageProps} />;
};

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore)

export default withRedux(makeStore)(MyApp);
