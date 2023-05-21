import "./Footer.css"
import Logo from "../../images/Logo.js"
import Facebook from "../../images/Facebook"
import Pinterest from "../../images/Pinterest"
import Twitter from "../../images/Twitter"
import Instagram from "../../images/Instagram"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <Logo color={"#fbf9fb"} />
                </div>
                <div className="footer__right">
                    <div className="footer__listContainer">
                        <h2 className="footer__listHeading">Features</h2>
                        <ul>
                            <li className="footer__listItem">Link Shortening</li>
                            <li className="footer__listItem">Branded Links</li>
                            <li className="footer__listItem">Analytics</li>
                        </ul>
                    </div>
                    <div className="footer__listContainer">
                        <h2 className="footer__listHeading">Resources</h2>
                        <ul>
                            <li className="footer__listItem">Blog</li>
                            <li className="footer__listItem">Developers</li>
                            <li className="footer__listItem">Support</li>
                        </ul>
                    </div>
                    <div className="footer__listContainer">
                        <h2 className="footer__listHeading">Company</h2>
                        <ul>
                            <li className="footer__listItem">About</li>
                            <li className="footer__listItem">Our team</li>
                            <li className="footer__listItem">Careers</li>
                            <li className="footer__listItem">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <Facebook color={"white"} classname="footer__icons" hoverColor={"#36d3ce"} />
                        <Twitter color={"white"} classname="footer__icons" hoverColor={"#36d3ce"} />
                        <Pinterest color={"white"} classname="footer__icons" hoverColor={"#36d3ce"} />
                        <Instagram color={"white"} classname="footer__icons" hoverColor={"#36d3ce"} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer