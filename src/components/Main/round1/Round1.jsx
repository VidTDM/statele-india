import useDidMount from "../../../utils/useDidMount";
import StatesBox from "./StatesBox";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

export default function Round1({ ans, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the State"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faMap} />
                <span>Guess the State</span>
            </div>
            <StatesBox ans={ans} />
            <Inputs ans={ans} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
