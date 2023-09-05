function StatesBox({ ans }) {
    return (
        <>
            <div className="statesBox">
                <img
                    src={`./statele-india/../../src/assets/${ans}.png`}
                    alt="Mystery State"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </>
    );
}

export default StatesBox;
