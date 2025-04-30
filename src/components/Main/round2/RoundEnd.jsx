import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoundEnd({ ans, round, setRound }) {
    function handleClick() {
        setRound(() => {
            return round + 1;
        });
    }
    function getNeighbouringStates() {
        const arr = ans.neighbouring_states.map((state, i) => {
            const arr = state.replaceAll("_", " ").split(" ");
            for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            const readableState = arr.join(" ");
            return readableState;
        });
        const transformed = [arr.slice(0, arr.length - 1).join(", "), arr[arr.length - 1]].join(
            arr.length == 1 ? "" : " and "
        );
        return transformed;
    }
    return (
        <div className="roundEnd">
            <div className="correct">
                The answer{ans.neighbouring_states.length > 1 ? "s were " : " was "}
                <b>{getNeighbouringStates()}</b>
            </div>
            <button onClick={handleClick} className="nextRound">
                Next Round
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
