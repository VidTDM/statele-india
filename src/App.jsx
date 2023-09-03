import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StatesBox from "./components/StatesBox";
import Inputs from "./components/Inputs/Inputs";
import states_min from "./data/states.min";

function App() {
    useEffect(() => {
        localStorage.setItem(
            "ans",
            states_min[
                Math.floor(Math.random() * states_min.length)
            ].toUpperCase()
        );
    }, []);

    return (
        <>
            <Navbar />
            <StatesBox />
            <Inputs />
        </>
    );
}

export default App;
