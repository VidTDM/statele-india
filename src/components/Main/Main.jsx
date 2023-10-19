import { useState } from "react";
// import Round1 from "./round1/Round1";
import Round1 from "./round1/Round1";

export default function Main({ ans }) {
    const [round, setRound] = useState(1);
    function handleCorrectInput() {
        setRound(() => {
            console.log("handleCorrectInput");
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
                break;
        }
        return jsx;
    }
    return <>{checkRound(round)}</>;
}
