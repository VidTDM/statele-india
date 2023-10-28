import useDidMount from "../../../utils/useDidMount";
import Inputs from './Inputs';
import StatesBox from './StatesBox';

export default function Round2({ ans, handleCorrectInput }) {
    useDidMount(() => (document.title = "Statele - Guess the Neighbouring States"));
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} />
        </>
    )
}