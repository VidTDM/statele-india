import { useState } from "react";
import useDidMount from "../../../utils/useDidMount";
import StatesBox from "../round1/StatesBox";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Round1({ ans, handleCorrectInput, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the Capital City"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faMapLocationDot} />
                <span>Guess the Capital City</span>
            </div>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
