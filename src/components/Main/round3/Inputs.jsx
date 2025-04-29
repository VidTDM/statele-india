import React, { useRef, useState } from "react";
import StateInput from "./StateInput";
import GuessesInputs from "./GuessesInputs";
import cities from "../../../data/cities";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Inputs({ ans, setRoundOver }) {
    const [city, setCity] = useState("");
    const [guesses, setGuesses] = useState([]);
    const doWrongInput = useRef(0);

    const guessesSnakeCase = guesses.map((guess) => {
        return guess.replaceAll(" ", "_").toLowerCase();
    });
    if (guessesSnakeCase.includes(ans.capital_city) || guessesSnakeCase.length === 3) setRoundOver(true);

    function handleSubmit(e) {
        e.preventDefault();
        doWrongInput.current = 0;
        if (
            cities[
                cities.findIndex((list_city) => list_city.toLowerCase() == city.replaceAll(" ", "_").toLowerCase())
            ] === undefined
        )
            handleWrongInput();
        else setGuesses([...guesses, city.toUpperCase()]);
        setCity("");
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
                <StateInput city={city} setCity={setCity} handleSubmit={handleSubmit} />
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
