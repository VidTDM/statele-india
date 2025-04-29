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
                    {ans.state
                        .split("_")
                        .map((state) => state.charAt(0).toUpperCase() + state.slice(1).toLowerCase())
                        .join(" ")}
                </b>
            </div>
            <button onClick={handleClick} className="nextRound">
                Next Round
            </button>
        </div>
    );
}
