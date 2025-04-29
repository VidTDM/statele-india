import states from "../../../data/states";

export default function GuessesInputs({ guesses, ans, handleWrongInput }) {
    function parseGuess(guess) {
        if (guess == undefined) return "";
        if (
            states[
                states.findIndex((state) => state.state.toLowerCase() == guess.replaceAll(" ", "_").toLowerCase())
            ] == undefined
        )
            return handleWrongInput();
        return ans.neighbouring_states.includes(guess.replaceAll(" ", "_").toLowerCase()) ? "correct" : "wrong";
    }
    let guessesInputsNoArr = [];
    const guessesInputsNo = Math.max(
        Math.ceil(ans.neighbouring_states.length * 2 - ans.neighbouring_states.length / 2),
        3
    );
    for (let i = 0; i < guessesInputsNo; i++) guessesInputsNoArr.push("");
    return (
        <div className="guesses">
            {guessesInputsNoArr.map((x, i) => {
                return (
                    <input
                        type="text"
                        className={`guesses-input ${parseGuess(guesses[i])}`}
                        placeholder={`Guess ${i + 1}`}
                        value={guesses[i]}
                        disabled
                    />
                );
            })}
        </div>
    );
}
