import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct package

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="line"></div>
                <p className="footer-text">GET US ON SOCIALS</p>
                <div className="icon-social">
                    <FontAwesomeIcon icon={faFacebook} className="icon" style={{ color: "#0d4de3", }} />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <FontAwesomeIcon icon={faTiktok} className="icon" />
                    <FontAwesomeIcon icon={faYoutube} className="icon" style={{ color: "#df0707", }} />
                </div>
            </footer>
            <div className="copyright">
                <p>&copy; Copyright 2025 Pet Blog</p>
                <p>Power by T&D</p>
            </div>
        </>
    );
}

export default Footer;