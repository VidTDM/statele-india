import Inputs from './Inputs';
import StatesBox from './StatesBox';

export default function Round2({ ans, handleCorrectInput }) {
    return (
        <>
            <StatesBox ans={ans} />
            <Inputs ans={ans} handleCorrectInput={handleCorrectInput} />
        </>
    )
}