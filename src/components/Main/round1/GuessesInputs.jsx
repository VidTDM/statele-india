import states from "../../../data/states";
import { CardinalSubset, cardinalFromDegree } from "cardinal-direction";
import { toRad, toDeg } from "../../../utils/math";

function stateObject(name, type) {
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
    guesses,
    ans,
    handleWrongInput,
    handleCorrectInput,
}) {
    if (guesses.length >= 6) handleCorrectInput();
    function parseGuess(guess) {
        if (guess == "") return "";
        const country = new Date().toString().split("(")[1].split(" ")[0];
        const lat1 = stateObject(guess.replaceAll(" ", "_"), "lat"); // Guess | Y Axis
        const long1 = stateObject(guess.replaceAll(" ", "_"), "long"); // Guess | X Axis
        const lat2 = ans.lat; // Answer | Y Axis
        const long2 = ans.long; // Answer | X Axis
        if (lat1 == "wrong-input" && long1 == "wrong-input") handleWrongInput();
        if (typeof lat1 != "number" || typeof long1 != "number") return "";
        if (lat1 === lat2 && long1 === long2)
            return [
                `${guess.toUpperCase()} | 0 | 🎉🎉🎉`,
                "correct",
                handleCorrectInput(),
            ];
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
        let distance = Math.round(R * c);
        if (
            country == "United States Of America" ||
            country == "Liberia" ||
            country == "Myanmar"
        ) {
            distance *= 0.621371;
            distance += "mi";
        } else {
            distance += "km";
        }
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

        return [`${guess.toUpperCase()} | ${distance} | ${direction}`, ""];
    }
    return (
        <div className="guesses">
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[0] ? guesses[0] : "")[1]}`}
                placeholder="Guess 1"
                disabled
                value={parseGuess(guesses[0] ? guesses[0] : "")[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[1] ? guesses[1] : "")[1]}`}
                placeholder="Guess 2"
                disabled
                value={parseGuess(guesses[1] ? guesses[1] : "")[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[2] ? guesses[2] : "")[1]}`}
                placeholder="Guess 3"
                disabled
                value={parseGuess(guesses[2] ? guesses[2] : "")[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[3] ? guesses[3] : "")[1]}`}
                placeholder="Guess 4"
                disabled
                value={parseGuess(guesses[3] ? guesses[3] : "")[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[4] ? guesses[4] : "")[1]}`}
                placeholder="Guess 5"
                disabled
                value={parseGuess(guesses[4] ? guesses[4] : "")[0]}
            />
            <input
                type="text"
                className={`guesses-input ${parseGuess(guesses[5] ? guesses[5] : "")[1]}`}
                placeholder="Guess 6"
                disabled
                value={parseGuess(guesses[5] ? guesses[5] : "")[0]}
            />
        </div>
    );
}

export default GuessesInputs;
