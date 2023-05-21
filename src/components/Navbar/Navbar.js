import { useLayoutEffect, useState } from "react"
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx"
import Logo from "../../images/Logo";
function Navbar() {
    const [clicked, setClicked] = useState(true);
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            setClicked(false)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const handleClick = () => {
        setClicked(() => !clicked);
    }
    return (
        <nav className="navbar">
            <div className="navbar__imageContainer">
                <Logo color={"#383543"} classname="navbar__leftLogo " />
                <RxHamburgerMenu onClick={handleClick} className="navbar__burg" />
            </div>
            <div className={`navbar__leftContainer ${size[0] < 376 && (!clicked) && "helper"}`}>
                <div className={`navbar__left ${clicked && "navbar__leftMobile"}`}>
                    <div className="navbar__leftOption ">Features</div>
                    <div className="navbar__leftOption ">Pricing</div>
                    <div className="navbar__leftOption ">Resources</div>
                </div>
                <hr className="navbar__line" />
                <div className={`navbar__right ${clicked && "navbar__rightMobile"}`}>
                    <div className="navbar__login">Login</div>
                    <div className="navbar__rightOption">Sign Up</div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar