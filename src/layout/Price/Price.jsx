import React from "react"
import Title from "../../components/Title/Title"
import LeadText from "../../components/LeadText/LeadText"
import {data} from "./data"
import "./Price.scss"
import Button from "../../components/Button/Button"

const Price = () => {
    const {headline, lead, buttonText, list} = data

    return <section className="price">
        <div className="container price__container">
            <div className="price__column">
                <Title tagName="h2" modClass="price__title">{headline}</Title>
                <LeadText modClass="price__lead">{lead}</LeadText>
                <Button tagName="a" href="#" modClass="price__button" center>{buttonText}</Button>
            </div>
            <div className="price__column">
                <ul className="price__list">
                    {list.map((i, idx) => (
                        <li className="price__item" key={idx}>
                            <div className="price__item-ico">{i.ico}</div>
                            <Title tagName="h3" modClass="price__item-title">{i.name}</Title>
                            <div className="price__item-types">
                                {i.price.map((type, typeIdx) => (
                                    <div className="price__item-type" key={typeIdx}>
                                        <p className="price__item-value">{type.value}</p>
                                        <p className="price__item-time">{type.valueTime}</p>
                                    </div>
                                ))}
                            </div>
                            <ul className="price__features">
                                {i.list.map((feature, featureIdx) => (
                                    <li className="price__features-item" key={featureIdx}>{feature}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}

export default Price
