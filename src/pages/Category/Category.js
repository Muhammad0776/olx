import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { Redirect, useParams } from "react-router-dom";

console.log(datas);

const Category = () => {
    const { category } = useParams();

    const filterData = datas.filter(v => v.category == category);
    const obj = filterData.length > 0 ? filterData[0] : {};
    const data = obj.data;

    return (
        <Container>
            <Redirect to="/Page404" />
            <div className="container top">
                <h1>Category: {category}</h1>
                <div className="row">
                    {data.map(v =>
                        <div>
                            <div className="product shadow rounded overflow-hidden p-2 mb-3 d-flex">
                                <img src={v.img} className="w-25 mb-4" alt="" />
                                <div className="ms-2 w-100">
                                    <div className="d-flex justify-content-between w-100">
                                        <p>{v.title}</p>
                                        <span>{v.price}</span> <br />
                                    </div>
                                    <span>{v.location}</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Container>

    )
}

export default Category;