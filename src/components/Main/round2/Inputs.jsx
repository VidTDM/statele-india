import React, { useRef, useState } from "react";
import StateInput from "../round1/StateInput";
import GuessesInputs from "./GuessesInputs";
import states from "../../../data/states";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Inputs({ ans, setRoundOver }) {
    const [state, setState] = useState("");
    const [guesses, setGuesses] = useState([]);
    const doWrongInput = useRef(0);

    const check = (arr, target) => target.every((v) => arr.includes(v));
    const guessesSnakeCase = guesses.map((guess) => {
        return guess.replaceAll(" ", "_").toLowerCase();
    });
    if (
        guessesSnakeCase.length === ans.neighbouring_states.length * 2 ||
        check(guessesSnakeCase, ans.neighbouring_states)
    )
        setRoundOver(true);

    function handleSubmit(e) {
        e.preventDefault();
        doWrongInput.current = 0;
        if (
            states[
                states.findIndex(
                    (stateObject) => stateObject.state.toLowerCase() == state.replaceAll(" ", "_").toLowerCase()
                )
            ] === undefined
        )
            handleWrongInput();
        else setGuesses([...guesses, state.toUpperCase()]);
        setState("");
    }
    function handleWrongInput() {
        if (!doWrongInput.current == 0) return;
        toast.error("State/City not found", {
            position: "top-center",
            autoClose: 2500,
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
                <GuessesInputs guesses={guesses} ans={ans} handleWrongInput={handleWrongInput} />
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
