import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MyWeb from "./routes/MyApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

export const userContext = React.createContext();

function App() {
  const [test, setTest] = useState(null);
  return (
    <userContext.Provider value={test}>
      <NextUIProvider>
        <div className=" dark text-foreground bg-background App flex  mx-auto flex-col  py-2 min-h-screen ">
          <MyWeb />
        </div>
      </NextUIProvider>
    </userContext.Provider>
  );
}

export default App;
