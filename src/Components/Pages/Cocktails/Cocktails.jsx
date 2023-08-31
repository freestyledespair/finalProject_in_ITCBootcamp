import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByAlco, searchCocktail } from '../../../store/slices/cocktailsSlice';
import s from "../Cocktails/Cocktails.module.css"
import { fetchCocktails } from './../../../store/slices/cocktailsSlice';

const Cocktails = () => {
    const [text, setText] = useState("")
    const { cocktails, isLoading } = useSelector(state => state.cocktails)
    const dispatch = useDispatch()


    const search = (e) => {
        e.preventDefault()
        dispatch(searchCocktail(text))
        setText("")
    }

    const toggleFilter = (e) => {
        console.log(e.target.value);
        if (e.target.value == 'All') {
            dispatch(fetchCocktails())
        } else {
            dispatch(filterByAlco(e.target.value))
        }
    }

    if (isLoading) {
        return <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2014/07/A-Tiny-Javascript-Library-To-Lazy-Load-Images.jpg?fit=406%2C308&ssl=1" />
    }

    return (

        <div className={s.container}>

            {/* ------ for Search and select*/}
            <div>
                <form onSubmit={search}>
                    <input type="text"
                        placeholder='search cocktail'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button>Search</button>

                </form>

                <select onChange={toggleFilter}>
                    <option value="All">All</option>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non Alcoholic</option>
                </select>
            </div>


            {/* ------ for get All Cocktails */}
            {
                !isLoading ?
                    cocktails?.length > 0 ?
                        cocktails.map(el => (
                            <div key={el.idDrink} className={s.cocktail}>
                                <h2>{el.strDrink}</h2>
                                <Link to={`/detail/${el?.idDrink}`}>
                                    <img width={300} src={el.strDrinkThumb} alt="" />
                                </Link>
                            </div>
                        ))
                        :
                        <h1> Не найдено</h1>
                    : <h1>Loading...</h1>
            }
        </div>
    );
};

export default Cocktails;