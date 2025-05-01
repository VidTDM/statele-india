export default function StatesBox({ ans, guesses }) {
    return (
        <div className="statesBox">
            {ans.neighbouring_states.map((state, i) => {
                return (
                    <img
                        src={new URL(`../../../assets/${state}.png`, import.meta.url).href}
                        alt="Mystery State"
                        className={
                            guesses.map((state) => state.replaceAll(" ", "_")).includes(state.toUpperCase())
                                ? "correct"
                                : ""
                        }
                        loading="eager"
                        fetchpriority="high"
                        key={i}
                    />
                );
            })}
        </div>
    );
}
