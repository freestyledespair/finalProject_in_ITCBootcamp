import React, { useEffect } from 'react';
import s from '../FilmDetail/FilmDetail.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailFilms } from '../../../../store/slices/kinopoiskSlice';

const FilmDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const filmDetail = useSelector(state => state?.films?.filmDetail)
    console.log(filmDetail);


    useEffect(() => {
        dispatch(detailFilms(id))
    }, [dispatch])
    return (
        <div className={s.container}>
            <div className={s.film} key={filmDetail.kinopoiskId}>
                <h2>{filmDetail.nameOriginal}</h2>
                <img style={{ height: '500px' }} width={300} src={filmDetail.posterUrl} alt="" />
                <h2>{filmDetail.slogan}</h2>
                <h2>{filmDetail.type}</h2>
                <h2>{filmDetail.year}</h2>
                <a target={'_blank'} href={filmDetail.webUrl}>Подробная информация</a>
            </div>
        </div>
    );
};

export default FilmDetail;


