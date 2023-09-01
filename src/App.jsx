import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StatesBox from "./components/StatesBox";
import StateInput from "./components/StateInput";
import GuessesInputs from "./components/round1/GuessesInputs";
import states_min from "./data/states.min";

function App() {
    useEffect(() => {
        localStorage.setItem(
            "ans",
            states_min[
                Math.floor(Math.random() * states_min.length)
            ].toUpperCase()
        );
    }, []);

    const [state, setState] = useState("");
    const [guessNo, setGuessNo] = useState(1);

    const [guess6, setGuess6] = useState("");
    const [guess5, setGuess5] = useState("");
    const [guess4, setGuess4] = useState("");
    const [guess3, setGuess3] = useState("");
    const [guess2, setGuess2] = useState("");
    const [guess1, setGuess1] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        setGuessNo(guessNo + 1);
        switch (guessNo) {
            case 1:
                setGuess1(state);
                break;

            case 2:
                setGuess2(state);
                break;

            case 3:
                setGuess3(state);
                break;

            case 4:
                setGuess4(state);
                break;

            case 5:
                setGuess5(state);
                break;

            case 6:
                setGuess6(state);
                break;

            default:
                break;
        }
        setState("");
    };

    return (
        <>
            <Navbar />
            <StatesBox />
            <div className="inputs">
                <StateInput
                    state={state}
                    setState={setState}
                    handleSumbit={handleSumbit}
                />
                <GuessesInputs
                    handleSumbit={handleSumbit}
                    guess6={guess6}
                    guess5={guess5}
                    guess4={guess4}
                    guess3={guess3}
                    guess2={guess2}
                    guess1={guess1}
                />
            </div>
        </>
    );
}

export default App;
