import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
    return (
        <section id='highlights'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="blue">Wonderland</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon={faBolt} />}
                            title="Watch with Alice"
                            para="Rare exploration experience."/>
                        <Highlight
                            icon={<FontAwesomeIcon icon={faBookOpen} />}
                            title="Endless Rabbit Holes"
                            para="Movies are everywhere."/>
                        <Highlight
                            icon={<FontAwesomeIcon icon={faTags} />}
                            title="Open-world Friendly"
                            para="Movies are free, if you can find them."/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;