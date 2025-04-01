import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct package
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="line"></div>
                <p className="footer-text">GET US ON SOCIALS</p>
                <div className="icon-social">
                    <Link to="https://www.facebook.com/sakk.637176"><FontAwesomeIcon icon={faFacebook} className="icon" style={{ color: "#0d4de3", }} /></Link>
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