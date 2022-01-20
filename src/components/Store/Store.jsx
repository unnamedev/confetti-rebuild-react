import React from "react"
import {data} from "./data"
import './Store.scss'

const Store = ({modClass = ""}) =>
    <ul className={`store ${modClass}`}>
        {data.map((i, idx) => (
            <li className="store__item" key={idx}>
                <a href={i.href} className="store__link">
                    <img src={i.src} alt={i.alt} className="store__ico"/>
                </a>
            </li>
        ))}
    </ul>

export default Store
