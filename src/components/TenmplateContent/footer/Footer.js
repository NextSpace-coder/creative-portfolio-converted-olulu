import React from 'react'
import { Link } from 'react-router-dom'


const Footer = (props) => {
    return (
        <div className="wpo-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" to="/">Portfolio</Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link to="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2024. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;