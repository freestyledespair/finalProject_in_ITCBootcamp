import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "../Home/Home.module.css"

const Home = () => {
    return (
        <div>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.navItem}>
                        <NavLink to="/films" className={s.navLink} activeClassName={s.activeLink}>
                            КИНОПОИСК
                        </NavLink>
                        {/* <NavLink to="/films" className={(isActive => isActive ? "navLink" : "activeLink")}>
                            КИНОПОИСК
                        </NavLink> */}
                    </li>
                    <li className={s.navItem}>
                        <NavLink to="/cocktails" className={s.navLink} activeClassName={s.activeLink}>
                            КОКТЕЙЛИ
                        </NavLink>
                        {/* <NavLink to="/cocktails" className={(isActive => isActive ? "navLink" : "activeLink")}>
                            КИНОПОИСК
                        </NavLink> */}
                    </li>
                    <li className={s.navItem}>
                        <NavLink to="/weathers" className={s.navLink} activeClassName={s.activeLink}>
                            ПОГОДА
                        </NavLink>
                        {/* <NavLink to="/weathers" className={(isActive => isActive ? "navLink" : "activeLink")}>
                            КИНОПОИСК
                        </NavLink> */}
                    </li>
                </ul>
            </nav >
            <div className={s.main}>
                <p className={s.text}>
                    Когда наступает вечер, многие из нас любят наслаждаться своими любимыми фильмами в уютной обстановке дома. И что может быть лучше, чем смотреть фильмы с коктейлем в руке, который соответствует настроению и теме просматриваемого фильма? Именно поэтому мы создали уникальный проект, который объединил в себе кинопоиск, коктейли и погоду!

                    Наш проект предлагает пользователям не только поиск фильмов по жанру, рейтингу и актерам, но также и рекомендации коктейлей, которые подходят к выбранному фильму. Например, если вы смотрите фильм ужасов, мы предложим вам коктейли, которые помогут снять стресс и добавят адреналина к просмотру.

                    Кроме того, наш проект также учитывает погодные условия в вашем регионе. Если за окном дождь, то мы предложим вам коктейль, который поможет утеплиться и создать уютную атмосферу, а в жаркую погоду - освежающий коктейль, который поможет охладиться.

                    Мы гордимся тем, что наш проект сочетает в себе развлечение и практичность, делая ваше времяпровождение еще более приятным и комфортным. Отличительной особенностью нашего проекта является его удобный интерфейс и интуитивно понятные функции, которые позволяют пользователям наслаждаться кинопоиском и коктейлями в пару кликов.

                    Не упустите возможность попробовать наш проект и насладиться комфортным просмотром любимых фильмов вместе с нашими вкусными коктейлями, подобранными специально для вас.
                </p>
            </div>
        </div >
    );
};

export default Home;