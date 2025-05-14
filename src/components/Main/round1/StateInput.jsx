import states_min from "../../../data/states.min";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StateInput({ state, setState, handleSubmit }) {
    return (
        <form className="state-input" onSubmit={handleSubmit}>
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
                {states_min.map((state_min, i) => {
                    const arr = state_min.replaceAll("_", " ").split(" ");
                    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    const readableState = arr.join(" ");
                    return <option value={readableState} key={i} />;
                })}
            </datalist>
            <button type="submit" className="state-input">
                Guess
                <FontAwesomeIcon icon={faGlobeAsia} />
            </button>
        </form>
    );
}

export default StateInput;
