import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css'
import { useDispatch } from 'react-redux';
import { toggleFetchName } from '../../store/slices/kinopoiskSlice';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className={s.header}>
            <Link onClick={() => dispatch(toggleFetchName())} className={s.h1} to={'/'}><h1>КИНОПОИСК КОКТЕЙЛИ ПОГОДА</h1 ></Link>
        </div >
    );
};

export default Header;
