import React, { useRef, useState } from "react";
import StateInput from "./StateInput";
import GuessesInputs from "./GuessesInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Inputs({ ans, setRoundOver }) {
    const [state, setState] = useState("");
    const [guessNo, setGuessNo] = useState(1);

    const [guess6, setGuess6] = useState("");
    const [guess5, setGuess5] = useState("");
    const [guess4, setGuess4] = useState("");
    const [guess3, setGuess3] = useState("");
    const [guess2, setGuess2] = useState("");
    const [guess1, setGuess1] = useState("");

    const doWrongInput = useRef(0);

    function handleSubmit(e) {
        e.preventDefault();
        setGuessNo((currentGuessNo) => {
            return currentGuessNo + 1;
        });
        doWrongInput.current = 0;
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
                setRoundOver(true);
                break;
        }
        setState("");
    }
    function handleWrongInput() {
        if (doWrongInput.current != 0) return;
        setGuessNo((currentGuessNo) => {
            return currentGuessNo - 1;
        });
        toast.error("State/City not found", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            pauseOnHover: true,
            theme: "colored",
        });
        doWrongInput.current++;
    }
    return (
        <>
            <div className="inputs">
                <StateInput state={state} setState={setState} handleSubmit={handleSubmit} />
                <GuessesInputs
                    guess6={guess6}
                    guess5={guess5}
                    guess4={guess4}
                    guess3={guess3}
                    guess2={guess2}
                    guess1={guess1}
                    ans={ans}
                    handleWrongInput={handleWrongInput}
                    setRoundOver={setRoundOver}
                />
            </div>
            <ToastContainer
                position="top-center"
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
