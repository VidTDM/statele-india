import React, { useRef, useState } from "react";
import StateInput from "./StateInput";
import GuessesInputs from "./round1/GuessesInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inputs({ ans }) {
    const [state, setState] = useState("");
    const [guessNo, setGuessNo] = useState(1);

    const [guess6, setGuess6] = useState("");
    const [guess5, setGuess5] = useState("");
    const [guess4, setGuess4] = useState("");
    const [guess3, setGuess3] = useState("");
    const [guess2, setGuess2] = useState("");
    const [guess1, setGuess1] = useState("");

    const doWrongInput = useRef(0);

    function handleSumbit(e) {
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
                break;
        }
        setState("");
    }
    function handleWrongInput() {
        if (doWrongInput.current == 0) {
            console.error("WRONG INPUT");
            setGuessNo((currentGuessNo) => {
                return currentGuessNo - 1;
            });
            toast.error("State not found", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            return;
        }
        doWrongInput.current++;
    }
    return (
        <>
            <div className="inputs">
                <StateInput
                    state={state}
                    setState={setState}
                    handleSumbit={handleSumbit}
                />
                <GuessesInputs
                    guess6={guess6}
                    guess5={guess5}
                    guess4={guess4}
                    guess3={guess3}
                    guess2={guess2}
                    guess1={guess1}
                    ans={ans}
                    handleWrongInput={handleWrongInput}
                />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2500}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default Inputs;
