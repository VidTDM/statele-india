function StatesBox({ ans }) {
    return (
        <>
            <div className="statesBox">
                <img
                    src={new URL(`../../../assets/${ans.state}.png`, import.meta.url).href}
                    alt="Mystery State"
                    loading="eager"
                    fetchpriority="high"
                />
            </div>
        </>
    );
}

export default StatesBox;
