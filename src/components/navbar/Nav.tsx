import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">главная</a>
            <a href="">скиллы</a>
            <a href="">проекты</a>
            <a href="">контакты</a>
        </div>
    );
};

export default Nav;
