import Twemoji from "react-twemoji";

function Navbar() {
    return (
        <>
            <Twemoji className="navbar"> {/* Div */}
                <header>
                    <a href="" className="stats">📈</a>
                    <span>🇮🇳 STATELE</span>
                    <a href="" className="settings">⚙️</a>
                </header>
            </Twemoji>
            <hr className="navbar-hr"/>
        </>
    )
}

export default Navbar;