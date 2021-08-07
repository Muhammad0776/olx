import "./Category.css"
import React from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFill } from "@fortawesome/free-solid-svg-icons";
import { toggleLike } from "../../redux/actions";

console.log(datas);

const Category = () => {
    const { category } = useParams();

    const data = useSelector(state => state.data[category]);
    console.log(data);

    const dispatch = useDispatch();
    const toggle = (i) => {
        let newData = [...data];
        newData[i].like = !newData[i].like;

        console.log({ [category]: newData });

        dispatch(toggleLike({ [category]: newData }))
    }

    return (
        <Container>
            {!data && <Redirect to="/Page404" />}
            <div className="container top">
                <h1>Category: {category}</h1>
                <div className="row">
                    {data?.map((v, i) =>
                        <div>
                            <div className="product shadow rounded overflow-hidden p-2 mb-3 d-flex">
                                <img src={v.img} className="w-25 mb-4" alt="" />
                                <div className="ms-2 w-100">
                                    <div className="d-flex justify-content-between w-100">
                                        <p>{v.title}</p>
                                        <span>{v.price}</span> <br />
                                        <span className="text-danger" onClick={() => toggle(i)}>
                                            <FontAwesomeIcon icon={v.like ? faHeartFill : faHeartEmpty} />
                                        </span>
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