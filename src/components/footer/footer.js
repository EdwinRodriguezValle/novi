import React from "react";
import footer from "./footer.css";
import {Link} from "react-router-dom";


function Footer(props){
    return(
        <>
            <footer>
                <section className="piedepagina">
                    <ul className="texto_pie" >
                        <Link to="https://www.bewelcome.org/about" target="_blank"> <li>About us</li></Link>
                        <Link to="https://www.bewelcome.org/feedback" target="_blank"><li>Our mission</li></Link>
                        <Link to="https://www.bewelcome.org/safety" target="_blank"><li>Our goals</li></Link>
                        <Link to="https://www.bewelcome.org/terms" target="_blank"><li>Terms of use</li></Link>
                        <Link to="https://www.bewelcome.org/privacy" target="_blank"><li>Privacy & security</li></Link>
                        <Link to="https://www.bewelcome.org/datarights" target="_blank"><li>Data right</li></Link>
                        <Link to="https://www.bewelcome.org/safety" target="_blank"><li>Safety</li></Link>
                        <Link to="https://www.bewelcome.org/faq" target="_blank"><li>FQS</li></Link>
                        <Link to="https://www.bewelcome.org/feedback" target="_blank"><li>Contacts us</li></Link>
                    </ul>
                </section>
            </footer>

        </>
    );
}

export default Footer;