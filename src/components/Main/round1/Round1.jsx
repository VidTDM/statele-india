import useDidMount from "../../../utils/useDidMount";
import StatesBox from "./StatesBox";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";
import { useState } from "react";

export default function Round1({ ans, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the State"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
            {/* <RoundEnd ans={ans} round={round} setRound={setRound} /> */}
        </>
    );
}
