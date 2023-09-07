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
                required
            />
            <datalist id="state-names">
                {states_min.map((state_min) => {
                    const arr = state_min.replaceAll("_", " ").split(" ");
                    for (let i = 0; i < arr.length; i++)
                        arr[i] =
                            arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    const readableState = arr.join(" ");
                    return <option value={readableState} />;
                })}
            </datalist>
            <button type="submit" className="state-input">
                🌏 Guess
            </button>
        </form>
    );
}

export default StateInput;
