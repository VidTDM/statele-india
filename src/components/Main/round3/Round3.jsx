import { useState } from "react";
import useDidMount from "../../../utils/useDidMount";
import StatesBox from "../round1/StatesBox";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";

export default function Round1({ ans, handleCorrectInput, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the Capital City"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
