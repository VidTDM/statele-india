import useDidMount from "../../../utils/useDidMount";
import StatesBox from "./StatesBox";
import Inputs from "./Inputs";

export default function Round1({ ans, handleCorrectInput }) {
    useDidMount(() => (document.title = "Statele - Guess the State"));
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} />
        </>
    );
}
