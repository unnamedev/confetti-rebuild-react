import React from "react"
import "./Analytics.scss"
import {data} from "./data"
import Store from "../../components/Store/Store"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"

const Analytics = () => {
    const {headline, lead} = data

    return <section className="analytics container">
        <Title tagName="h2" modClass="analytics__title">{headline}</Title>
        <LeadText modClass="analytics__lead">{lead}</LeadText>
        <Store modClass="analytics__store"/>
    </section>
}

export default Analytics
