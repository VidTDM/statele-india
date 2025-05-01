import languages from "../../../data/languages";

export default function GuessesInputs({ guesses, ans, handleWrongInput }) {
    function parseGuess(guess) {
        if (guess == undefined) return "";
        if (
            languages[languages.findIndex((lang) => lang.toLowerCase() == guess.replaceAll(" ", "_").toLowerCase())] ==
            undefined
        )
            return handleWrongInput();
        return ans.languages.includes(guess.replaceAll(" ", "_").toLowerCase()) ? "correct" : "wrong";
    }
    return (
        <div className="guesses">
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[0])}`}
                placeholder={"Guess 1"}
                value={guesses[0]}
                disabled
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[1])}`}
                placeholder={"Guess 2"}
                value={guesses[1]}
                disabled
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[2])}`}
                placeholder={"Guess 3"}
                value={guesses[2]}
                disabled
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[3])}`}
                placeholder={"Guess 4"}
                value={guesses[3]}
                disabled
            />
        </div>
    );
}
