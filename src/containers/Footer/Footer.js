import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

let list01 = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/help", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
    { to: "/features", title: "Бизнес на OLX" },
    { to: "/features", title: "Реклама на сайте" },
    { to: "/features", title: "Условия использования" },
    { to: "/features", title: "Политика конфиденциальности" },
]

let list02 = [
    { to: "/", title: "Как продавать и покупать?" },
    { to: "/", title: "Правила безопасности" },
    { to: "/", title: "Карта сайта" },
    { to: "/", title: "Карта регионов" },
    { to: "/", title: "Карьера в OLX" },
    { to: "/", title: "Обратная связь" },
]

const Footer = () => {
    return (
        <footer className="bg - light text-dark border-top">
            <div className="container py-5">
                <div class="row">
                    <div className="col-md-4"><div>
                        {list01.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div></div>
                    <div className="col-md-4">
                        <div>
                            {list02.map(value =>
                                <Link to={value.to} key={value.to}>{value.title}</Link>)}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="d-flex">
                                <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer" className="me-3"><img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" /></a>
                                <a href="https://apps.apple.com/uz/app/torg-uz/id665094472?ign-mpt=uo%3D4"><img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" /></a>
                            </div>
                            <p className="grey-color">Бесплатное приложение для твоего телефона</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;