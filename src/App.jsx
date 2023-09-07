import { useRef } from "react";
import useDidMount from "./utils/useDidMount";
import "./App.css";
import Navbar from "./components/Navbar";
import StatesBox from "./components/StatesBox";
import Inputs from "./components/Inputs/Inputs";
import states_min from "./data/states.min";

function App() {
    const ans = useRef(
        states_min[Math.floor(Math.random() * states_min.length)]
    );
    useDidMount(() => localStorage.setItem("ans", ans.current));

    return (
        <>
            <Navbar />
            <StatesBox ans={ans.current} />
            <Inputs ans={ans.current} />
        </>
    );
}

export default App;
