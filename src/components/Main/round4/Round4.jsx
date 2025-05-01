import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Inputs from "./Inputs";
import { useState } from "react";
import StatesBox from "../round1/StatesBox";
import RoundEnd from "./RoundEnd";

export default function Round4({ ans, handleCorrectInput, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Spoken Languages"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faLanguage} />
                <span>Guess the Spoken Languages</span>
            </div>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
