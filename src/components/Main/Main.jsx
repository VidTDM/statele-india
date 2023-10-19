import { useState } from "react";
import Round1 from "./round1/Round1";

export default function Main({ ans }) {
    const [round, setRound] = useState(1);
    function handleCorrectInput() {
        setRound(() => {
            return round + 1;
        });
    }
    function checkRound(round) {
        let jsx;
        switch (round) {
            case 1:
                jsx = (
                    <Round1 ans={ans} handleCorrectInput={handleCorrectInput} />
                );
                break;

            default:
                jsx = (
                    <p>This round is not here yet</p>
                )
                break;
        }
        return jsx;
    }
    return <>{checkRound(round)}</>;
}
