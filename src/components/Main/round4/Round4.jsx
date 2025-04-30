import useDidMount from "../../../utils/useDidMount";
import { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Round4({ ans, handleCorrectInput }) {
    useDidMount(() => (document.title = "Statele - Quiz"));
    const [gameEnded, setGameEnded] = useState(false);
    const [gameEnded1, setGameEnded1] = useState(false);
    return (
        <>
            <div className="round">
                <FontAwesomeIcon icon={faClipboardQuestion} />
                <span>Quiz</span>
            </div>
            <Question1
                ans={ans}
                handleCorrectInput={handleCorrectInput}
                gameEnded={gameEnded}
                setGameEnded={setGameEnded}
            />
            {gameEnded ? (
                <Question2
                    ans={ans}
                    handleCorrectInput={handleCorrectInput}
                    gameEnded1={gameEnded1}
                    setGameEnded1={setGameEnded1}
                />
            ) : (
                ""
            )}
        </>
    );
}
