import { useState } from "react";
import Round1 from "./round1/Round1";
import Round2 from "./round2/Round2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main({ ans }) {
    const [round, setRound] = useState(1);
    function handleCorrectInput() {
        toast.info("Moving to next round", {
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
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
            default:
                jsx = <p>This round is not here yet</p>;
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
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
