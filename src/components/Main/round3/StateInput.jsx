import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import cities from "../../../data/cities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StateInput({ city, setCity, handleSubmit }) {
    return (
        <form className="state-input" onSubmit={handleSubmit}>
            <input
                type="text"
                className="state-input"
                placeholder="City"
                list="city-names"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <datalist id="city-names">
                {cities.map((city, i) => {
                    const arr = city.replaceAll("_", " ").split(" ");
                    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    const readableCity = arr.join(" ");
                    return <option value={readableCity} key={i} />;
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
