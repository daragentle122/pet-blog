import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <Link to="/"><img src={logo} alt="pet-blog" className="logo" /></Link>
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/dogs">Dogs</Link></li>
                        <li><Link to="/cats">Cats</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;