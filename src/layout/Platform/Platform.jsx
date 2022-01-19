import React from "react"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import {data} from "./data"
import "./Platform.scss"
import Button from "../../components/Button/Button";
import Store from "../../components/Store/Store";

const Platform = () => {
    const {frameDesktop, frameMobile, videoSrc, videoBackup, headline, buttonText, buttonGoogle} = data

    return <section className="platform">
        <div className="container platform__container">
            <Title tagName="h2" modClass="platform__title">{headline}</Title>
            <LeadText modClass="platform__lead">
                Available for <a href="#">iOS</a>, <a href="#">Android</a>, <a href="#">Chrome</a> and <a
                href="#">Web</a>
            </LeadText>

            <div className="platform__mobile">
                <img src={frameMobile} alt={headline} className="platform__mobile-frame"/>
                <video className="platform__mobile-video" poster={videoBackup} playsInline autoPlay muted loop>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>

            <Store modClass="platform__store"/>

            <div className="platform__desktop">
                <img src={frameDesktop} alt={headline} className="platform__desktop-frame"/>
            </div>

            <ul className="platform__list">
                <li className="platform__item">
                    <Button tagName="a" href="#" modClass="platform__item-link">{buttonText}</Button>
                </li>
                <li className="platform__item">
                    <Button tagName="a" href="#" modClass="platform__item-link" withIco>
                        <img src={buttonGoogle.src} alt={buttonGoogle.text} className="platform__item-ico"/>
                        {buttonGoogle.text}
                    </Button>
                </li>
            </ul>

        </div>
    </section>
}

export default Platform
