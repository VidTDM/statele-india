import { useMemo, useRef } from "react";
import shuffleArray from "shuffle-array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

export default function Question2({ ans, handleCorrectInput, gameEnded1, setGameEnded1 }) {
    let shuffledOptions = useMemo(() => shuffleArray(ans.area_options), [ans.area_options]);
    const optionRefs = ans.area_options.map(() => useRef(null));

    function handleOptionSelect(i) {
        const correctOptionIndex = ans.area_options.findIndex((area) => area == ans.area);
        if (i === correctOptionIndex) {
            setGameEnded1(true);
            optionRefs[i].current.classList.add("correct");
            handleCorrectInput();
        } else {
            optionRefs[i].current.classList.add("wrong");
        }
    }
    function makeReadable(str) {
        const arr = str.replaceAll("_", " ").split(" ");
        for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const readableStr = arr.join(" ");
        return readableStr;
    }
    return (
        <div className="question">
            <div className="question-header">
                <FontAwesomeIcon icon={faGlobeAsia} />
                What is the area of {makeReadable(ans.state)}?
            </div>
            <div className="question-body">
                {shuffledOptions.map((area, i) => {
                    return (
                        <button
                            type="button"
                            className="question-btn"
                            ref={optionRefs[i]}
                            onClick={() => handleOptionSelect(i)}
                            disabled={gameEnded1}
                        >
                            {area}km
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
