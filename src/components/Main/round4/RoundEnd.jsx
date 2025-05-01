import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoundEnd({ ans, round, setRound }) {
    function handleClick() {
        setRound(() => {
            return round + 1;
        });
    }
    return (
        <div className="roundEnd">
            <div className="correct">
                The answers were{" "}
                <b>
                    {ans.languages
                        .map((state, i) => {
                            return state.charAt(0).toUpperCase() + state.slice(1);
                        })
                        .join(" and ")}
                </b>
            </div>
            <br />
            <button onClick={handleClick} className="nextRound">
                Next Round
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}
