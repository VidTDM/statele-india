import React, { useRef, useState } from "react";
import LanguageInput from "./LanguageInput";
import GuessesInputs from "./GuessesInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import languages from "../../../data/languages";

export default function Inputs({ ans, setRoundOver }) {
    const [lang, setLang] = useState("");
    const [guesses, setGuesses] = useState([]);
    const doWrongInput = useRef(0);

    const check = (arr, target) => target.every((v) => arr.includes(v));
    const guessesSnakeCase = guesses.map((guess) => {
        return guess.replaceAll(" ", "_").toLowerCase();
    });
    if (guessesSnakeCase.length === 4 || check(guessesSnakeCase, ans.languages)) setRoundOver(true);

    function handleSubmit(e) {
        e.preventDefault();
        doWrongInput.current = 0;
        if (
            languages[languages.findIndex((l) => l.toLowerCase() == lang.replaceAll(" ", "_").toLowerCase())] ==
            undefined
        )
            return handleWrongInput();
        else setGuesses([...guesses, lang.toUpperCase()]);
        setLang("");
    }
    function handleWrongInput() {
        if (!doWrongInput.current == 0) return;
        toast.error("Language not found", {
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
                <LanguageInput lang={lang} setLang={setLang} handleSubmit={handleSubmit} />
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
