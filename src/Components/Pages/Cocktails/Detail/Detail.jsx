import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from "../Detail/Detail.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { detailCocktail } from '../../../../store/slices/cocktailsSlice';
import Ingredient from './Ingredient';

const Detail = () => {
    const { id } = useParams()
    // const [drink, setDrink] = useState({})
    const dispatch = useDispatch()
    const drinkDetail = useSelector(state => state?.cocktails?.drinkDetail)
    // console.log(drinkDetail)


    useEffect(() => {
        dispatch(detailCocktail(id))
    }, [dispatch])

    return (
        <div className={s.container}>
            <h2>Name: {drinkDetail?.strDrink}</h2>
            <h2>Alcohol status: {drinkDetail?.strAlcoholic}</h2>
            <img width={350} src={drinkDetail?.strDrinkThumb} alt="" />

            <div>
                <h2>Ingredients:</h2>
                <Ingredient name={drinkDetail?.strIngredient1} />
                <Ingredient name={drinkDetail?.strIngredient2} />
                <Ingredient name={drinkDetail?.strIngredient3} />
                <Ingredient name={drinkDetail?.strIngredient4} />
                <Link to="/cocktails">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;