function StatesBox({ ans }) {
    return (
        <>
            <div className="statesBox">
                <div className="state">
                    <img
                        src={new URL(`../../../assets/${ans.state}.svg`, import.meta.url).href}
                        alt="Mystery State"
                        loading="eager"
                        fetchpriority="high"
                    />
                </div>
            </div>
        </>
    );
}

export default StatesBox;
