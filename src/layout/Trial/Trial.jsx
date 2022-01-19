import React from "react"
import "./Trial.scss"
import {data} from "./data"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import Button from "../../components/Button/Button";

const Trial = () => {
    const {headline, lead, buttonText, src} = data

    return <section className="trial">
        <div className="container">
            <img src={src} alt={headline} className="trial__image"/>
            <Title tagName="h2" modClass="trial__title">{headline}</Title>
            <LeadText modClass="trial__lead">{lead}</LeadText>
            <Button tagName="a" href="#" modClass="trial__button" center>{buttonText}</Button>
        </div>
    </section>
}

export default Trial
