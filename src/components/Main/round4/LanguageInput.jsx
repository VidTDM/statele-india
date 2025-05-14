import shuffleArray from "shuffle-array";
import languages from "../../../data/languages";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LanguageInput({ lang, setLang, handleSubmit }) {
    return (
        <form className="state-input" onSubmit={handleSubmit}>
            <input
                type="text"
                className="state-input"
                placeholder="Language"
                list="language-names"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                required
            />
            <datalist id="language-names">
                {shuffleArray(languages).map((lang, i) => {
                    const arr = lang.replaceAll("_", " ").split(" ");
                    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    return <option value={arr.join(" ")} key={i} />;
                })}
            </datalist>
            <button type="submit" className="state-input">
                Guess
                <FontAwesomeIcon icon={faGlobeAsia} />
            </button>
        </form>
    );
}

export default LanguageInput;
