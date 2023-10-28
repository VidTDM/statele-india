import useDidMount from "../../../utils/useDidMount";
import Question1 from "./Question1";

export default function Round4({ ans, handleCorrectInput }) {
    useDidMount(() => (document.title = "Statele - Guess the Longest Border"));
    return <Question1 ans={ans} handleCorrectInput={handleCorrectInput} />;
}
