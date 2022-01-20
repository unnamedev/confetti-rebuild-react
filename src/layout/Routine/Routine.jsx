import React from "react"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import {data} from "./data"
import "./Routine.scss"
import RoutineAnimation from "../../components/RoutineAnimation/RoutineAnimation"

const Routine = () => {
    const {headline, lead} = data

    return <section className="routine">
        <div className="container routine__container">
            <Title tagName="h2" modClass="routine__title">{headline}</Title>
            <LeadText modClass="routine__lead">{lead}</LeadText>
        </div>
        <RoutineAnimation/>
    </section>
}

export default Routine
