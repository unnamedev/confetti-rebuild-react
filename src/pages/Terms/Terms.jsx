import React from "react"
import {data} from "./data"
import Title from "../../components/Title/Title"
import Header from "../../layout/Header/Header"

const Terms = () => {
    const {headline, date, list} = data

    return <>
        <Header/>
        <section className="page-terms page-policy">
            <div className="container page-policy__container">
                <Title tagName="h1" modClass="page-policy__title">{headline}</Title>
                <p className="page-policy__date">{date}</p>
                <ul className="page-policy__list">
                    {list.map((item, idx) => (
                        <li className="page-policy__item" key={idx}>
                            <Title tagName="h3"
                                   modClass="page-policy__item-title">{`${idx > 10 ? `0${idx}` : idx}.${item.title}`}</Title>
                            <div className="page-policy__item-content"
                                 dangerouslySetInnerHTML={{__html: item.text}}></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}

export default Terms
