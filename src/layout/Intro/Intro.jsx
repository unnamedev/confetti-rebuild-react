import React from "react"
import "./Intro.scss"
import {data} from "./data"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import Store from "../../components/Store/Store"

const Intro = () => {
    const {headline, lead, src} = data

    return <section className="intro">
        <div className="container intro__container">
            <img src={src} alt={headline} className="intro__image"/>
            <Title tagName="h2" modClass="intro__title">{headline}</Title>
            <LeadText modClass="intro__lead">{lead}</LeadText>
            <Store/>
        </div>
    </section>
}

export default Intro
