import React from "react"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import {data} from "./data"
import "./Goals.scss"
import Button from "../../components/Button/Button"

const Goals = () => {
    const {headline, list, buttonText} = data

    return <section className="goals">
        <div className="container">
            <Title tagName="h2" modClass="goals__title">{headline}</Title>
            <ul className="goals__list">
                {list.map((item, idx) => (
                    <li className={`goals__item ${idx === 1 ? "goals__item--with-ico" : "" }`} key={idx}>
                        <div className="goals__item-figure">
                            <img className="goals__item-ico" src={item.ico} alt={item.title}/>
                        </div>
                        <Title tagName="h3" modClass="goals__item-title">{item.title}</Title>
                        <LeadText modClass="goals__item-text">{item.text}</LeadText>
                        <img src={item.bottomImage} alt={item.title} className="goals__item-diagram"/>
                    </li>
                ))}
            </ul>
            <Button tagName="a" href="#" center invert modClass="goals__button">{buttonText}</Button>
        </div>
    </section>
}

export default Goals
