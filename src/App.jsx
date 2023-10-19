import { useRef } from "react";
import useDidMount from "./utils/useDidMount";
import "./App.css";
import Navbar from "./components/dumb/Navbar";
import Main from "./components/Main/Main";
import states from "./data/states";

function App() {
    const ans = useRef(states[Math.floor(Math.random() * states.length)]);
    useDidMount(() => localStorage.setItem("ans", ans.current));

    return (
        <>
            <Navbar />
            <Main ans={ans.current} />
        </>
    );
}

export default App;
