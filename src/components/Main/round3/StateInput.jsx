import cities from '../../../data/cities';

function StateInput({ city, setCity, handleSubmit }) {
    return (
        <form className="state-input" onSubmit={handleSubmit}>
            <input
                type="text"
                className="state-input"
                placeholder="State/Union Territory"
                list="state-names"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <datalist id="state-names">
                {cities.map((city, i) => {
                    const arr = city.replaceAll("_", " ").split(" ");
                    for (let i = 0; i < arr.length; i++)
                        arr[i] =
                            arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    const readableCity = arr.join(" ");
                    return <option value={readableCity} key={i} />;
                })}
            </datalist>
            <button type="submit" className="state-input">
                Guess
            </button>
        </form>
    );
}

export default StateInput;
