import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";

export default function App() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Tabs />
      </div>
    </>
  );
}
