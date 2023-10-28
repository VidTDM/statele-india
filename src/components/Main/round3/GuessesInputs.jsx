import cities from "../../../data/cities";

export default function GuessesInputs({ guesses, ans, handleWrongInput }) {
    function parseGuess(guess, i) {
        if (guess == undefined) return "";
        if (
            cities[
                cities.findIndex(
                    (list_city) =>
                        list_city == guess.replaceAll(" ", "_").toLowerCase()
                )
            ] == undefined
        )
            return handleWrongInput();
        const guessesSnakeCase = guesses.map((guess) => {
            return guess.replaceAll(" ", "_").toLowerCase();
        });
        return guessesSnakeCase[i] == ans.capital_city ? "correct" : "wrong";
    }
    return (
        <div className="guesses">
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[0], 0)}`}
                placeholder="Guess 1"
                disabled
                value={guesses[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[1], 1)}`}
                placeholder="Guess 2"
                disabled
                value={guesses[1]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[2], 2)}`}
                placeholder="Guess 3"
                disabled
                value={guesses[2]}
            />
        </div>
    );
}
