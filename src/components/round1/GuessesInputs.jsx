import states from "../../data/states";

function toRad(d) {
    return (d * Math.PI) / 180;
}
function toDeg(r) {
    return (r * 180) / Math.PI;
}
function stateObject(name, type) {
    if (
        states[
            states.findIndex(
                (state) => state.state.toLowerCase() == name.toLowerCase()
            )
        ] == undefined
    ) {
        return "";
    }
    if (type == "lat") {
        return states[
            states.findIndex(
                (state) => state.state.toLowerCase() == name.toLowerCase()
            )
        ].lat;
    } else if (type == "long") {
        return states[
            states.findIndex(
                (state) => state.state.toLowerCase() == name.toLowerCase()
            )
        ].long;
    }
}

function GuessesInputs({ guess1, guess2, guess3, guess4, guess5, guess6 }) {
    function parseGuess(guess) {
        const ans = localStorage.getItem("ans");
        const lat1 = stateObject(guess, "lat"); // Guess | Y Axis
        const long1 = stateObject(guess, "long"); // Guess | X Axis
        const lat2 = stateObject(ans, "lat"); // Answer | Y Axis
        const long2 = stateObject(ans, "long"); // Answer | X Axis
        if (typeof lat1 != "number" || typeof long1 != "number") return "";
        if (lat1 == lat2 || long1 == long2)
            return `${guess.toUpperCase()} | 0 km | 🎉🎉🎉`;

        // Calculate Distance
        const R = 6371; // km
        const x1 = lat2 - lat1;
        const dLat = toRad(x1);
        const x2 = long2 - long1;
        const dLong = toRad(x2);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
                Math.cos(toRad(lat2)) *
                Math.sin(dLong / 2) *
                Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = Math.round(R * c);

        // Calculate Direction
        const dX = lat2 - lat1; // Ans - Guess
        const dY = long2 - long1; // Ans - Guess
        const degrees = Math.round(toDeg(Math.atan2(dY, dX)));
        const positiveDegrees = degrees >= 0 ? degrees : 360 + degrees;
        const directions = ["⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️"];
        const direction = directions[Math.round((positiveDegrees / 45) % 8)];

        return `${guess.toUpperCase()} | ${d} km | ${direction}`;
    }
    return (
        <div className="guesses">
            <input
                type="text"
                className="guesses-input guess-1"
                placeholder="Guess 1"
                disabled
                value={parseGuess(guess1)}
            />
            <input
                type="text"
                className="guesses-input guess-2"
                placeholder="Guess 2"
                disabled
                value={parseGuess(guess2)}
            />
            <input
                type="text"
                className="guesses-input guess-3"
                placeholder="Guess 3"
                disabled
                value={parseGuess(guess3)}
            />
            <input
                type="text"
                className="guesses-input guess-4"
                placeholder="Guess 4"
                disabled
                value={parseGuess(guess4)}
            />
            <input
                type="text"
                className="guesses-input guess-5"
                placeholder="Guess 5"
                disabled
                value={parseGuess(guess5)}
            />
            <input
                type="text"
                className="guesses-input guess-6"
                placeholder="Guess 6"
                disabled
                value={parseGuess(guess6)}
            />
        </div>
    );
}

export default GuessesInputs;
