import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import s from "../Ingredients/Ingredients.module.css"
import { detailCocktail, ingredientCocktail } from './../../../../store/slices/cocktailsSlice';

const Ingredients = () => {
    const { name } = useParams()
    const dispatch = useDispatch()
    const ingr = useSelector(state => state?.cocktails?.ingredient)
    // console.log(ingr)
    console.log(ingr)


    useEffect(() => {
        dispatch(ingredientCocktail(name))
    }, [name])


    return (
        <div className={s['ingredient-wrapper']}>
            <h1 className={s['ingredient-name']}>Name: {ingr.strIngredient}</h1>
            <img className={s['ingredient-image']} src={`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`} alt={name} />
            <h2 className={s['ingredient-alcoholic']}>Alcoholic: {ingr.strAlcohol == "Yes" ? ingr.strAlcohol : "Non alcoholic"} </h2>
            <h4 className={`${s.ingredient_description} notranslate`}>Описание: {ingr.strDescription ? ingr.strDescription : "None description"}</h4>
        </div>
    );
};

export default Ingredients;
