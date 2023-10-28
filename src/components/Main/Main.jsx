import { useState } from "react";
import Round1 from "./round1/Round1";
import Round2 from "./round2/Round2";
import Round3 from "./round3/Round3";
import Round4 from "./round4/Round4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main({ ans }) {
    const [round, setRound] = useState(1);
    function handleCorrectInput() {
        if (round < 4) {
            toast.info("Moving to next round", {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: true,
                theme: "colored",
            });
        } else {
            toast.success("Congratulations you won!", {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: true,
                theme: "colored",
            });
        }
        const timer = setTimeout(() => {
            setRound(() => {
                return round + 1;
            });
        }, 2500);
        toast.clearWaitingQueue();
        return () => clearTimeout(timer);
    }
    function checkRound(round) {
        let jsx;
        switch (round) {
            case 1:
                jsx = (
                    <Round1 ans={ans} handleCorrectInput={handleCorrectInput} />
                );
                break;
            case 2:
                jsx = (
                    <Round2 ans={ans} handleCorrectInput={handleCorrectInput} />
                );
                break;
            case 3:
                jsx = (
                    <Round3 ans={ans} handleCorrectInput={handleCorrectInput} />
                );
                break;
            case 4:
                jsx = (
                    <Round4 ans={ans} handleCorrectInput={handleCorrectInput} />
                );
                break;
            case 5:
                jsx = (
                    <p className="congrats">🎉 Congratulations You Won! 🎉</p>
                );
                break;
            default:
                jsx = <p>Congrats you broke the game :P</p>;
                break;
        }
        return jsx;
    }
    return (
        <>
            {checkRound(round)}
            <ToastContainer
                position="top-center"
                limit={1}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
