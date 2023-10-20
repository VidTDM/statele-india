import states from "../../../data/states";

export default function GuessesInputs({ guesses, ans, handleWrongInput }) {
    function parseGuess(guess) {
        if (guess == undefined) return "";
        if (
            states[
                states.findIndex(
                    (state) =>
                        state.state.toLowerCase() ==
                        guess.replaceAll(" ", "_").toLowerCase()
                )
            ] == undefined
        )
            return handleWrongInput();
        return ans.neighbouring_states.includes(
            guess.replaceAll(" ", "_").toLowerCase()
        )
            ? "correct"
            : "wrong";
    }
    return (
        <div className="guesses">
            {ans.neighbouring_states.map((a, i) => {
                return (
                    <>
                        <input
                            type="text"
                            className={`guesses-input ${parseGuess(
                                guesses[2 * i]
                            )}`}
                            placeholder={`Guess ${2 * i + 1}`}
                            disabled
                            value={guesses[2 * i]}
                        />
                        <input
                            type="text"
                            className={`guesses-input ${parseGuess(
                                guesses[2 * i + 1]
                            )}`}
                            placeholder={`Guess ${2 * i + 2}`}
                            disabled
                            value={guesses[2 * i + 1]}
                        />
                    </>
                );
            })}
        </div>
    );
}
