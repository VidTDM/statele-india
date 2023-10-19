import Inputs from './round2/Inputs';
import StatesBox from './round1/StatesBox';

export default function Round2({ ans }) {
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} />
        </>
    )
}