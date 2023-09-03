import states_min from "../../data/states.min";

function StateInput({ state, setState, handleSumbit }) {
    return (
        <form className="state-input" onSubmit={handleSumbit}>
            <input
                type="text"
                className="state-input"
                placeholder="State/Union Territory"
                list="state-names"
                value={state}
                onChange={(e) => setState(e.target.value)}
                onKeyDown={(e) => {
                    e.code == "Enter" &&
                        document.querySelector("button.state-input").click();
                }}
                required
            />
            <datalist id="state-names">
                {states_min.map((state) => {
                    return <option value={state} />;
                })}
            </datalist>
            <button type="submit" className="state-input">
                🌏 Guess
            </button>
        </form>
    );
}

export default StateInput;
