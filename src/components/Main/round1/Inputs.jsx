import React, { useRef, useState } from "react";
import StateInput from "./StateInput";
import GuessesInputs from "./GuessesInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Inputs({ ans, handleCorrectInput }) {
    const [state, setState] = useState("");
    const [guesses, setGuesses] = useState([]);

    const doWrongInput = useRef(0);

    function handleSubmit(e) {
        e.preventDefault();
        doWrongInput.current = 0;
        // switch (guessNo) {
        //     case 1:
        //         setGuess1(state);
        //         break;
        //     case 2:
        //         setGuess2(state);
        //         break;
        //     case 3:
        //         setGuess3(state);
        //         break;
        //     case 4:
        //         setGuess4(state);
        //         break;
        //     case 5:
        //         setGuess5(state);
        //         break;
        //     case 6:
        //         setGuess6(state);
        //         const char_arr = ans.state.replaceAll("_", " ").split(" ");
        //         for (let i = 0; i < char_arr.length; i++)
        //             char_arr[i] =
        //                 char_arr[i].charAt(0).toUpperCase() +
        //                 char_arr[i].slice(1);
        //         const readableState = char_arr.join(" ");
        //         toast.info(`${readableState} is the answer`, {
        //             position: "top-center",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             theme: "colored",
        //         });
        //         handleCorrectInput();
        //         break;
        // }
        setGuesses([...guesses, state])
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
                <StateInput
                    state={state}
                    setState={setState}
                    handleSubmit={handleSubmit}
                />
                <GuessesInputs
                    guesses={guesses}
                    ans={ans}
                    handleWrongInput={handleWrongInput}
                    handleCorrectInput={handleCorrectInput}
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
