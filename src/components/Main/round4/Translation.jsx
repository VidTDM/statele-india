import { useRef, useState } from "react";
import ieatapples from "../../../data/ieatapples";
import shuffleArray from "shuffle-array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobeAsia, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { mergeRefs } from "react-merge-refs";

export default function Translation({ ans, roundOver, setRoundOver }) {
    const readableLanguages = ans.languages.map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1));
    let answerOptions;
    {
        const arr = Object.keys(ieatapples);
        const inLang = arr.filter((lang) => ans.languages.includes(lang));
        const notInLang = shuffleArray.pick(
            arr.filter((lang) => !inLang.includes(lang)),
            { picks: 4 }
        );
        const langs = shuffleArray(inLang.concat(notInLang));
        answerOptions = langs.map((lang) => ieatapples[lang]);
    }

    const [droppables, setDroppables] = useState({
        placeholder1: [],
        placeholder2: [],
        ansContainer1: [answerOptions[0]],
        ansContainer2: [answerOptions[1]],
        ansContainer3: [answerOptions[2]],
        ansContainer4: [answerOptions[3]],
        ansContainer5: [answerOptions[4]],
        ansContainer6: [answerOptions[5]],
    });
    const [droppablesIntial] = useState(droppables);
    const [hasClicked, setHasClicked] = useState(false);

    const firstAnswer = useRef(null);
    const secondAnswer = useRef(null);
    const firstPlaceholderAnswer = useRef(null);
    const secondPlaceholderAnswer = useRef(null);

    const getRef = (item) => {
        const checkIndex = (item) => {
            const key = Object.keys(ieatapples).find((key) => ieatapples[key] === item);
            const index = ans.languages.indexOf(key);
            return index;
        };
        return checkIndex(item) == 0 ? firstAnswer : checkIndex(item) == 1 ? secondAnswer : null;
    };

    const handleDrop = (e, destination) => {
        const item = e.dataTransfer.getData("item");
        const origin = e.dataTransfer.getData("origin");
        if (origin === destination) return;
        if (droppables[destination].length >= 1) return;
        setDroppables((prev) => {
            const originData = prev[origin].filter((older) => older !== item);
            const destinationData = [...prev[destination], item];
            return {
                ...prev,
                [origin]: originData,
                [destination]: destinationData,
            };
        });
    };
    const handleDragStart = (e, item, origin) => {
        e.dataTransfer.setData("item", item);
        e.dataTransfer.setData("origin", origin);
    };
    const handleGuess = (e) => {
        e.preventDefault();
        if (droppables.placeholder1.length == 0 || droppables.placeholder2.length == 0) return;
        if (firstAnswer.current === firstPlaceholderAnswer.current) {
            firstAnswer.current?.classList.add("correct");
        } else if (firstAnswer.current === secondPlaceholderAnswer.current) {
            firstPlaceholderAnswer.current?.classList.add("wrong");
        } else {
            firstAnswer.current?.classList.add("correct");
            firstPlaceholderAnswer.current?.classList.add("wrong");
        }
        if (secondAnswer.current === secondPlaceholderAnswer.current) {
            secondAnswer.current?.classList.add("correct");
        } else if (secondAnswer.current === firstPlaceholderAnswer.current) {
            secondPlaceholderAnswer.current?.classList.add("wrong");
        } else {
            secondAnswer.current?.classList.add("correct");
            secondPlaceholderAnswer.current?.classList.add("wrong");
        }
        setRoundOver(true);
    };
    const handleShowAnswers = () => {
        setHasClicked(true);
        setDroppables(() => {
            const output = { ...droppablesIntial };
            output.placeholder1 = [ieatapples[ans.languages[0]]];
            output.placeholder2 = [ieatapples[ans.languages[1]]];
            firstAnswer.current?.classList.remove("correct", "wrong");
            secondAnswer.current?.classList.remove("correct", "wrong");
            firstPlaceholderAnswer.current?.classList.add("correct");
            firstPlaceholderAnswer.current?.classList.remove("wrong");
            secondPlaceholderAnswer.current?.classList.add("correct");
            secondPlaceholderAnswer.current?.classList.remove("wrong");
            return output;
        });
    };
    return (
        <div className="translation">
            <span>
                <span>
                    How do you say "I eat apples" in <b>{readableLanguages.join(" and ")}</b>
                </span>
                <small>
                    <b>Note: </b>Translations may be inaccurate.
                </small>
            </span>
            <div className="boxes">
                <div className="placeholder-boxes">
                    {Object.keys(droppables)
                        .slice(0, 2)
                        .map((droppable, i) => {
                            return (
                                <div
                                    className="placeholder-box"
                                    key={droppable}
                                    onDrop={(e) => handleDrop(e, droppable)}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <b>{readableLanguages[i]}</b>
                                    <div className="placeholder">
                                        {droppables[droppable].map((item) => (
                                            <div
                                                className={`answer ${
                                                    item == "ངས་ཀར་ཅེསུ་ཟ་གི་ཡོད།" ? "noto-serif-tibetan" : ""
                                                }`}
                                                key={droppable}
                                                ref={mergeRefs([
                                                    getRef(item),
                                                    !i ? firstPlaceholderAnswer : secondPlaceholderAnswer,
                                                ])}
                                                draggable={roundOver ? "false" : "true"}
                                                disabled={roundOver}
                                                onDragStart={(e) => handleDragStart(e, item, droppable)}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <form onSubmit={handleGuess}>
                    <button className="guess-btn round-4" type="submit" disabled={roundOver}>
                        Guess
                        <FontAwesomeIcon icon={faGlobeAsia} />
                    </button>
                </form>
                <div className="answer-bank">
                    <FontAwesomeIcon icon={faLanguage} style={{ filter: "invert(0.85)" }} />
                    {Object.keys(droppables)
                        .slice(2)
                        .map((droppable, i) => (
                            <div
                                className="ans-container"
                                key={droppable}
                                onDrop={(e) => handleDrop(e, droppable)}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {droppables[droppable].map((item) => (
                                    <div
                                        className={`answer ${
                                            item == "ངས་ཀར་ཅེསུ་ཟ་གི་ཡོད།" ? "noto-serif-tibetan" : ""
                                        }`}
                                        key={droppable}
                                        ref={getRef(item)}
                                        draggable={roundOver ? "false" : "true"}
                                        disabled={roundOver}
                                        onDragStart={(e) => handleDragStart(e, item, droppable)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
                {roundOver ? (
                    <button className="show-answers round-4" disabled={hasClicked} onClick={handleShowAnswers}>
                        Show Answers
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                ) : null}
            </div>
        </div>
    );
}
