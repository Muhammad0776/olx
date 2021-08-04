import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import ThemeContext from "./../../theme-context"
import { Button } from 'reactstrap';
import "./Header.css"
import { FaRegUser, FaRegHeart } from "react-icons/fa";



const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // console.log(theme, toggleTheme);

    return (
        <div className="shadow mb-3 back-c fixed-top">
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <img src="https://static3.tildacdn.com/tild3738-3330-4134-a262-366536343433/OLX_Logo_Teal_RGB.png" className="img" alt="" />
                <div className="d-flex">
                    <div className="d-lg-flex d-none">
                        <p className="d-flex justify-content-center align-items-center me-3 text-white mb-0"><p className="effect-p">O'Z</p> <span>| РУ</span></p>
                        <a href="#" className="me-3 text-white d-flex justify-content-center align-items-center"><FaRegHeart /></a>
                        <div className="d-flex justify-content-center align-items-center text-white me-3">
                            <FaRegUser className="me-3" />
                            <p className="mb-0">Мой профиль</p>
                        </div>
                        <Button className="me-3 pod">Подать объявление</Button>
                    </div>
                    <Button className="bor-rad" onClick={toggleTheme} color={theme}>{theme == "dark" ? "Day" : "Night"}</Button>
                </div>
            </div>
        </div >
    )
}

export default Header