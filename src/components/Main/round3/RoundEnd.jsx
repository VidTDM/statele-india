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
                The answer was{" "}
                <b>
                    {ans.capital_city
                        .split("_")
                        .map((city) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())
                        .join(" ")}
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
