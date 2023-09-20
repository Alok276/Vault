import React from "react";
import Logo from "../Logo/Logo";
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer_box flex">

            <div className="left">
                <div className="container">

                    <div className="footer_logo">
                        <Logo/>
                    </div>
                    <p>
                        A blockchain-driven eVault, where smart contracts deliver unmatched security and effortless document management.
                    </p>

                </div>
                
                <div>
                    <h3>
                        Follow us
                    </h3>
                </div>
            </div>
        
            <div className="columns flex">
                <div className="middle">
                    <p>
                        <ul className="list">
                            <li>Home</li>
                            <li>About</li>
                            <li>FAQs</li>
                            <li>Circular</li>
                        </ul>
                    </p>
                </div>
                
                <div className="right">
                    <p>
                        <ul className="list">
                            <li>Need Help</li>
                            <li>Credits</li>
                            <li>Partner</li>
                        </ul>
                    </p>
                    <p flex flex-column>
                    Powered by
                    <Logo/>
                </p>
                </div>

                
            </div>

    </footer>
    )
}

export default Footer;