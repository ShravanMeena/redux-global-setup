import React from "react";
import storeDispatcher from "../redux/store/index";
import { START_LOADING, STOP_LOADING } from "../redux/action-types";
import { useSelector } from "react-redux";

export default function ReduxTest() {
  const { isLoading } = useSelector((state) => state.loader);

  const onReq = (isStart) => {
    if (isStart) {
      storeDispatcher.dispatch({ type: START_LOADING });

      setTimeout(() => {
        onReq(false);
      }, 10000);
    } else {
      storeDispatcher.dispatch({ type: STOP_LOADING });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {isLoading && <h1> Please wait... or STOP</h1>}

      <button
        style={{
          height: 60,
          borderRadius: 20,
          width: 300,
          backgroundColor: "green",
          color: "#fff",
          border: "1px solid green",
          fontSize: 20,
          fontWeight: "initial",
        }}
        onClick={() => {
          onReq(true);
        }}
      >
        START
      </button>
      <br />
      <button
        style={{
          height: 60,
          borderRadius: 20,
          width: 300,
          backgroundColor: "red",
          color: "#fff",
          border: "1px solid red",
          fontSize: 20,
          fontWeight: "initial",
        }}
        onClick={() => {
          onReq(false);
        }}
      >
        FINISH
      </button>
    </div>
  );
}
