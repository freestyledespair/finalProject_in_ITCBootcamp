import React, { useEffect, useState } from 'react';
import s from '../Kinopoisk/Kinopoisk.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchFilm } from '../../../store/slices/kinopoiskSlice';
import Pagination from '@mui/material/Pagination';
import { fetchMovieData } from '../../../store/slices/kinopoiskSlice';

const Kinopoisk = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const { films, pagesCount, fetchName, isLoading } = useSelector(state => state.films)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        dispatch(searchFilm({ searchQuery }))
    }

    const checkFetch = () => {
        if (fetchName === 'fetchMovieData') {
            dispatch(fetchMovieData(currentPage))
        } else if (fetchName === 'searchFilm') {
            dispatch(searchFilm({ searchQuery, page: currentPage }))
        }
    }

    useEffect(() => {
        checkFetch()
    }, [currentPage])

    if (isLoading) {
        return <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2014/07/A-Tiny-Javascript-Library-To-Lazy-Load-Images.jpg?fit=406%2C308&ssl=1" />
    }

    return (
        <div>
            <form className={s.inpBut} onSubmit={handleSearch}>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button>Search</button>
            </form>
            <div className={s.container}>
                {
                    films?.length > 0 ?
                        films.map(el => (
                            <div className={s.film} key={el.kinopoiskId || el.filmId}>
                                <h2>{el.nameRu ? el.nameRu.slice(0, 20) + "..." : el.nameOriginal}</h2>
                                <Link to={`/film-detail/${el?.kinopoiskId || el.filmId}`}><img style={{ height: '500px' }} width={300} src={el.posterUrl} alt="" /></Link>
                                <h2>Рейтинг: {el.ratingKinopoisk}</h2>
                            </div>
                        ))
                        :
                        <h1>Не найдено</h1>
                }
            </div>
            <div>
                <Pagination onChange={(e, page) => {
                    setCurrentPage(page)
                    window.scrollTo(0, 0)
                }} page={currentPage} count={pagesCount} color="primary" />
            </div>
        </div>
    );
};

export default Kinopoisk;

