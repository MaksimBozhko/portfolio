import React from 'react';
import cs from '../../common/styles.module.css'
import Nav from "../navbar/Nav";
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={cs.container}>
                <div className={s.header}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
};

export default Header;