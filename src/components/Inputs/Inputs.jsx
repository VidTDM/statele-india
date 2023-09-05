import React, { useState } from "react";
import StateInput from "./StateInput";
import GuessesInputs from "./round1/GuessesInputs";

function Inputs({ ans }) {
    const [state, setState] = useState("");
    const [guessNo, setGuessNo] = useState(1);

    const [guess6, setGuess6] = useState("");
    const [guess5, setGuess5] = useState("");
    const [guess4, setGuess4] = useState("");
    const [guess3, setGuess3] = useState("");
    const [guess2, setGuess2] = useState("");
    const [guess1, setGuess1] = useState("");

    function handleSumbit(e) {
        e.preventDefault();
        setGuessNo((currentGuessNo) => {
            return currentGuessNo + 1;
        });
        switch (guessNo) {
            case 1:
                setGuess1(state);
                break;

            case 2:
                setGuess2(state);
                break;

            case 3:
                setGuess3(state);
                break;

            case 4:
                setGuess4(state);
                break;

            case 5:
                setGuess5(state);
                break;

            case 6:
                setGuess6(state);
                break;
        }
        setState("");
    }
    return (
        <div className="inputs">
            <StateInput state={state} setState={setState} handleSumbit={handleSumbit}/>
            <GuessesInputs
                guess6={guess6}
                guess5={guess5}
                guess4={guess4}
                guess3={guess3}
                guess2={guess2}
                guess1={guess1}
                ans={ans}
            />
        </div>
    );
}

export default Inputs;
