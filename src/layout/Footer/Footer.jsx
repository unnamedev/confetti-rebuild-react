import React from "react"
import {data} from "./data"
import "./Footer.scss"
import {Link} from "react-router-dom"

const Footer = () => {
    const {logo, copyright, menus, socials} = data

    return <footer className="footer">
        <div className="container footer__container">
            <div className="footer__column">
                <a href={logo.href} className="footer__logo">
                    <img src={logo.src} alt={logo.alt} className="footer__logo-ico"/>
                </a>
                <p className="footer__copyright">{`${copyright} © ${new Date().getFullYear()}`}</p>
            </div>
            <div className="footer__column">
                <div className="footer__menus">
                    {menus.map((menu, idx) => (
                        <ul className="footer__menu" key={idx}>
                            {menu.map((item, menuIdx) => (
                                <li className="footer__menu-item" key={menuIdx}>
                                    <Link to={item.href} className="footer__menu-link">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <ul className="social footer__social">
                    {socials.map((item, idx) => (
                        <li className="social__item" key={idx}>
                            <Link to={item.href} className="social__link" title={item.alt} aria-label={item.alt}>
                                <img src={item.src} alt={item.alt} className="social__ico"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
}

export default Footer
