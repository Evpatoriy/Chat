import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { StoreContext } from "storeon/react";
import store from "./store";

function App() {
  return (
    <>
      <StoreContext.Provider value={store}>
        <MainPage />
      </StoreContext.Provider>
    </>
  );
}

export default App;
