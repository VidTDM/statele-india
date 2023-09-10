import { useMemo } from "react";
import states from "../../../data/states";
import { CardinalSubset, cardinalFromDegree } from "cardinal-direction";

function toRad(d) {
    return (d * Math.PI) / 180;
}
function toDeg(r) {
    return (r * 180) / Math.PI;
}
function stateObject(name, type) {
    if (name == "") return "";
    const nameLowerCase = name.toLowerCase();
    if (
        states[
            states.findIndex(
                (state) => state.state.toLowerCase() == nameLowerCase
            )
        ] == undefined
    )
        return "wrong-input";
    if (type == "lat") {
        return states[
            states.findIndex(
                (state) => state.state.toLowerCase() == nameLowerCase
            )
        ].lat;
    } else if (type == "long") {
        return states[
            states.findIndex(
                (state) => state.state.toLowerCase() == nameLowerCase
            )
        ].long;
    }
}

function GuessesInputs({
    guess1,
    guess2,
    guess3,
    guess4,
    guess5,
    guess6,
    ans,
    handleWrongInput,
}) {
    function parseGuess(guess) {
        const lat1 = stateObject(guess.replaceAll(" ", "_"), "lat"); // Guess | Y Axis
        const long1 = stateObject(guess.replaceAll(" ", "_"), "long"); // Guess | X Axis
        const lat2 = stateObject(ans, "lat"); // Answer | Y Axis
        const long2 = stateObject(ans, "long"); // Answer | X Axis
        if (lat1 == "wrong-input" && long1 == "wrong-input") handleWrongInput();
        if (typeof lat1 != "number" || typeof long1 != "number") return "";
        if (lat1 == lat2 && long1 == long2)
            return [`${guess.toUpperCase()} | 0 km | 🎉🎉🎉`, "correct"];
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
        const emojis = ["↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️", "⬆️"];
        const directions = ["NE", "E", "SE", "S", "SW", "W", "NW", "N"];
        const direction =
            emojis[
                directions.indexOf(
                    cardinalFromDegree(positiveDegrees, CardinalSubset.Ordinal)
                )
            ];

        return [`${guess.toUpperCase()} | ${d} km | ${direction}`, ""];
    }
    return (
        <div className="guesses">
            <input
                type="text"
                className={`guesses-input guess-1 ${parseGuess(guess1)[1]}`}
                placeholder="Guess 1"
                disabled
                value={useMemo(() => parseGuess(guess1)[0], [guess1])}
            />
            <input
                type="text"
                className={`guesses-input guess-2 ${parseGuess(guess2)[1]}`}
                placeholder="Guess 2"
                disabled
                value={useMemo(() => parseGuess(guess2)[0], [guess2])}
            />
            <input
                type="text"
                className={`guesses-input guess-3 ${parseGuess(guess3)[1]}`}
                placeholder="Guess 3"
                disabled
                value={useMemo(() => parseGuess(guess3)[0], [guess3])}
            />
            <input
                type="text"
                className={`guesses-input guess-4 ${parseGuess(guess4)[1]}`}
                placeholder="Guess 4"
                disabled
                value={useMemo(() => parseGuess(guess4)[0], [guess4])}
            />
            <input
                type="text"
                className={`guesses-input guess-5 ${parseGuess(guess5)[1]}`}
                placeholder="Guess 5"
                disabled
                value={useMemo(() => parseGuess(guess5)[0], [guess5])}
            />
            <input
                type="text"
                className={`guesses-input guess-6 ${parseGuess(guess6)[1]}`}
                placeholder="Guess 6"
                disabled
                value={useMemo(() => parseGuess(guess6)[0], [guess6])}
            />
        </div>
    );
}

export default GuessesInputs;
