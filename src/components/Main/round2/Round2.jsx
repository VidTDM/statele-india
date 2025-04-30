import { useState } from "react";
import useDidMount from "../../../utils/useDidMount";
import Inputs from "./Inputs";
import RoundEnd from "./RoundEnd";
import StatesBox from "./StatesBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

export default function Round2({ ans, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Guess the Neighbouring States"));
    const [roundOver, setRoundOver] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faCompass} />
                <span>Guess the Neighbouring States</span>
            </div>
            <StatesBox ans={ans} />
            <Inputs ans={ans} setRoundOver={setRoundOver} />
            {roundOver ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
