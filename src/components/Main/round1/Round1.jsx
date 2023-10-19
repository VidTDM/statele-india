import StatesBox from "./StatesBox";
import Inputs from "./Inputs";

export default function Round1({ ans, handleCorrectInput }) {
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} />
        </>
    );
}
