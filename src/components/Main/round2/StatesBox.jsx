export default function StatesBox({ ans }) {
    return (
        <>
            <div className="statesBox">
                    {ans.neighbouring_states.map((state, i) => {
                        return (
                            <img
                                src={new URL(`../../../assets/${state}.png`, import.meta.url).href}
                                alt="Mystery State"
                                loading="eager"
                                fetchpriority="high"
                                key={i}
                            />
                        );
                    })}
            </div>
        </>
    );
}
