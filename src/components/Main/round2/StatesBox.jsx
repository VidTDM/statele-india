export default function StatesBox({ ans, guesses }) {
    return (
        <div className="statesBox">
            {ans.neighbouring_states.map((state, i) => {
                return (
                    <div
                        className={`state ${
                            guesses.map((state) => state.replaceAll(" ", "_")).includes(state.toUpperCase())
                                ? "correct"
                                : ""
                        }`}
                    >
                        <img
                            src={new URL(`../../../assets/${state}.svg`, import.meta.url).href}
                            alt="Mystery State"
                            loading="eager"
                            fetchpriority="high"
                            key={i}
                        />
                    </div>
                );
            })}
        </div>
    );
}
