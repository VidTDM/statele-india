import { useRef } from "react";
import useDidMount from "./utils/useDidMount";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main";
import states from "./data/states";
import shuffleArray from "shuffle-array";

function App() {
    const ans = useRef(shuffleArray.pick(shuffleArray(states)));
    useDidMount(() => localStorage.setItem("ans", ans.current));
    return (
        <>
            <Navbar />
            <Main ans={ans.current} />
        </>
    );
}

export default App;
