import React from "react"
import Header from "../../layout/Header/Header"
import {data} from "./data"
import "./Pricing.scss"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"

const Pricing = () => {
    const {headline, list} = data

    return <>
        <Header type="blue"/>
        <section className="pricing">
            <div className="container">
                <Title tagName="h1" modClass="pricing__title">{headline}</Title>
                <ul className="pricing__list">
                    {list.map((item, idx) => (
                        <li className="pricing__item" key={idx}>
                            {item.icoSrc && (
                                <div className="pricing__item-figure">
                                    <img src={item.icoSrc} alt={item.name} className="pricing__item-ico"/>
                                </div>
                            )}
                            <Title tagName="h3" modClass="pricing__item-name">{item.name}</Title>
                            <div className="pricing__item-types">
                                {item.prices.map((type, typeIdx) => (
                                    <div className="pricing__item-type" key={typeIdx}>
                                        <p className="pricing__item-value">{type.value}</p>
                                        <p className="pricing__item-time">{type.valueName}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="pricing__item-habits">{item.habitsCount}</p>
                            <Button tagName="a" href="#" modClass="pricing__item-button">{item.buttonText}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}

export default Pricing
