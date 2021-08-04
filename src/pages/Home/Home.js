import "./Home.css"
import React, { useContext } from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import ThemeContext from "./../../theme-context"
import HeaderWrapper from "../../containers/Header/HeaderWrapper";

const categories = [
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        backColor: "#3A77FF",
        title: "Недвижимость",
        to: "Недвижимость"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        backColor: "rgb(35, 229, 219)",
        title: "Транспорт",
        to: "transport"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        backColor: "#ff5636",
        title: "Работа",
        to: "Работа"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        backColor: "#fff6d9",
        title: "Животные",
        to: "Животные"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
        backColor: "#ceddff",
        title: "Дом и сад",
        to: "Дом"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        backColor: "#c8f8f6",
        title: "Электроника",
        to: "Электроника"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        backColor: "#ffd6c9",
        title: "Бизнес и услуги",
        to: "Бизнес"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
        backColor: "#ffce32",
        title: "Мода и стиль",
        to: "Мода"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
        backColor: "#ceddff",
        title: "Хобби",
        to: "Хобби"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
        backColor: "#c8f8f6",
        title: "Отдам даром",
        to: "Отдам"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
        backColor: "#ffd6c9",
        title: "Обмен",
        to: "Обмен"
    },
]

const Home = () => {

    const { theme } = useContext(ThemeContext)
    console.log(theme);

    return (
        <HeaderWrapper className={theme}>
            <Container>
                <div className="container py-4 top">
                    <h1 className="text-center">Главные категории</h1>
                    {categories.map(v =>
                        <Link to={v.to} key={v.to} className="category">
                            <div className="icon" style={{ backgroundColor: v.backColor }}>
                                <img src={v.icon} alt="" />
                            </div>
                            <span className="bg-color text-center ps-0">{v.title}</span>
                        </Link>)
                    }
                </div>
            </Container>
        </HeaderWrapper>
    )
}

export default Home;