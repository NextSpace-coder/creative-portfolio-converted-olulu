import React from 'react'
import { Link} from 'react-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="mobail-menu">
                                <MobileMenu/>
                            </div>
                            <div className="hide-logo">
                                <Link onClick={ClickHandler} className="navbar-brand logo" to="/">Olulu</Link>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                <button className="menu-close"><i className="ti-close"></i></button>
                                <div className="mobail-menu-inner">
                                    <div className="navbar-header">
                                        <Link className="navbar-brand logo" to="/">Olulu</Link>
                                    </div>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link activeClass="active" to="home" spy={true} smooth={true}  duration={500} >Home</Link></li>
                                        <li>
                                            <Link activeClass="active" to="about" spy={true} smooth={true}  duration={500}>About</Link>
                                        </li>
                                        <li><Link activeClass="active" to="service" spy={true} smooth={true}  duration={500}>Service</Link></li>
                                        <li>
                                            <Link activeClass="active" to="portfolio" spy={true} smooth={true}  duration={500} onClick={ClickHandler}>Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="blog" spy={true} smooth={true}  duration={500}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="call-btn">
                                        <a className="theme-btn" href="tel:(+852)569325023">Call Me - (+852) 569 325
                                            023</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;