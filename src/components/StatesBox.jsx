function StatesBox({ ans }) {
    return (
        <>
            <div className="statesBox">
                <img
                    src={`https://raw.githubusercontent.com/VidTDM/statele-india/main/src/assets/${ans}.png`}
                    alt="Mystery State"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </>
    );
}

export default StatesBox;
