import { useState } from "react";
import useDidMount from "../../../utils/useDidMount";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";
import StatesBox from "./StatesBox";

export default function Round2({ ans, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the Neighbouring States"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
