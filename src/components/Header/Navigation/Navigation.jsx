import sprite from '../images/sprite.svg';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink
                className={s.nav_link}
                activeclassname={s.activeLink}
                to={'/BR-frontend/library'}
            >
                <svg className={s.navSvg}>
                    <use href={`${sprite}#icon-library-header`}></use>
                </svg>
            </NavLink>
            <NavLink
                className={s.nav_link}
                activeclassname={s.activeLink}
                to={'/BR-frontend/'}
            >
                <svg className={s.navSvg}>
                    <use href={`${sprite}#icon-home-header`}></use>
                </svg>
            </NavLink>
        </nav>
    );
}

export default Navigation;