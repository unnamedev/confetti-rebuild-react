import React from "react"
import {data} from "./data"
import Title from "../../components/Title/Title"

const Policy = () => {
    const {headline, date, list} = data

    return <section className="page-terms">
        <div className="container">
            <Title tagName="h1">{headline}</Title>
            <p className="page-terms__date">{date}</p>
            <ul className="page-terms__list">
                {list.map((item, idx) => (
                    <li className="page-terms__item" key={idx}>
                        <Title tagName="h3">{`${idx > 10 ? `0${idx}` : idx}.${item.title}`}</Title>
                        <div dangerouslySetInnerHTML={{__html: item.text}}></div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}

export default Policy
