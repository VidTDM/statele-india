import { useMemo, useRef, useState } from "react";
import { Length } from "../../dumb/Svgs";
import shuffleArray from "shuffle-array";

export default function Question1({ ans, handleCorrectInput }) {
    const [gameEnded, setGameEnded] = useState(false);
    const optionRefs = ans.neighbouring_states.map(() => useRef(null));
    const shuffledStates = useMemo(
        () => shuffleArray(ans.neighbouring_states),
        [ans.neighbouring_states]
    );

    function handleOptionSelect(i) {
        const correctOptionIndex = ans.neighbouring_states.findIndex(
            (state) => state === ans.longest_border
        );
        if (i === correctOptionIndex) {
            setGameEnded(true);
            optionRefs[i].current.classList.add("correct");
            handleCorrectInput();
        } else {
            optionRefs[i].current.classList.add("wrong");
        }
    }
    function makeReadable(str) {
        const arr = str.replaceAll("_", " ").split(" ");
        for (let i = 0; i < arr.length; i++)
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const readableStr = arr.join(" ");
        return readableStr;
    }
    return (
        <div className="question">
            <div className="question-header">
                <Length />
                What is longest border of {makeReadable(ans.state)}?
            </div>
            <div className="question-body">
                {shuffledStates.map((state, i) => {
                    return (
                        <button
                            type="button"
                            className="question-btn"
                            ref={optionRefs[i]}
                            onClick={() => handleOptionSelect(i)}
                            disabled={gameEnded}
                        >
                            {makeReadable(state)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
