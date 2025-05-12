import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Inputs from "./Inputs";
import { useState } from "react";
import StatesBox from "../round1/StatesBox";
import RoundEnd from "./RoundEnd";
import useDidMount from "../../../utils/useDidMount";
import Translation from "./Translation";

export default function Round4({ ans, round, setRound }) {
    useDidMount(() => (document.title = "Statele - Spoken Languages"));
    const [roundOver, setRoundOver] = useState(false);
    const [roundOver1, setRoundOver1] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faLanguage} />
                <span>Guess the Spoken Languages</span>
            </div>
            <StatesBox ans={ans} />
            <Inputs ans={ans} setRoundOver={setRoundOver} />
            {roundOver ? (
                <>
                    <hr className="spliter" />
                    <Translation ans={ans} roundOver={roundOver1} setRoundOver={setRoundOver1} />
                </>
            ) : (
                ""
            )}
            {roundOver && roundOver1 ? <RoundEnd ans={ans} round={round} setRound={setRound} /> : ""}
        </>
    );
}
