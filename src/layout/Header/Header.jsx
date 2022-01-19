import React, {useState} from "react"
import './Header.scss'
import {data} from './data'
import Button from "../../components/Button/Button"
import {Link} from "react-router-dom"

const Header = () => {
    const {logo, burger, desktopMenu, mobileData: {user, pricing, menuFirst, menuSecond, socials}} = data
    const [openMenu, setOpenMenu] = useState(false)

    const burgerHandler = () => {
        setOpenMenu((prev) => !prev)
        document.body.style.overflowY = !openMenu ? 'hidden' : 'unset'
    }
    const overlayHandler = (e) => {
        setOpenMenu(!e.target.classList.contains("header__overlay"))
        document.body.style.overflowY = !openMenu ? 'hidden' : 'unset'
    }

    return <header className="header">
        <nav className="header-nav header__nav container">
            <Link to="/" className="logo header__logo">
                <img src={logo.src} alt={logo.alt} className="header__logo-ico"/>
            </Link>
            <button className="header__burger" onClick={() => burgerHandler()}>
                <img src={burger} alt="Open Menu" className="header__burger-ico"/>
            </button>
            <div className="header__desktop">
                <ul className="header__desktop-list">
                    {desktopMenu.map((menuItem, menuItemIdx) => (
                        <li className="header__desktop-item" key={menuItemIdx}>
                            {!menuItem.type && (
                                <Link className="header__desktop-link" to={menuItem.href}>{menuItem.label}</Link>
                            )}
                            {menuItem.type && (
                                <Button tagName="a" href={menuItem.href}
                                        modClass="header__desktop-button">{menuItem.label}</Button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={(e) => overlayHandler(e)}
                 className={`header__mobile header__overlay ${openMenu === true ? "header__overlay--is-open" : ""}`}>
                <div className="header__side">
                    <ul className="header__user">
                        {user.map((item, idx) => (
                            <li className="header__user-item" key={idx}>
                                <Button tagName="a" href={item.href}
                                        modClass="header__user-button">{item.label}</Button>
                            </li>
                        ))}
                    </ul>
                    <div className="header__side-row">
                        <ul className="header__menu">
                            {pricing.map((item, idx) => (
                                <li className="header__menu-item" key={idx}>
                                    <a className="header__menu-link" href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header__side-row">
                        <ul className="header__menu">
                            {menuFirst.map((item, idx) => (
                                <li className="header__menu-item" key={idx}>
                                    <a className="header__menu-link" href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header__side-row">
                        <ul className="header__menu">
                            {menuSecond.map((item, idx) => (
                                <li className="header__menu-item" key={idx}>
                                    <a className="header__menu-link" href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="social header__social">
                            {socials.map((item, idx) => (
                                <li className="social__item" key={idx}>
                                    <a href={item.href} className="social__link" title={item.alt} aria-label={item.alt}>
                                        <img src={item.src} alt={item.alt} className="social__ico"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Header
