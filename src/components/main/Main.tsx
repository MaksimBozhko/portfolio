import React from 'react';
import cs from '../../common/styles.module.css'
import s from './main.module.css'
import cn from 'classnames'

const Main = () => {
    const containerStyle = cn(cs.container, cs.container_main)
    return (
        <main className={s.mainBlock}>
            <div className={containerStyle}>
                <div className={s.content}>
                    <div className={s.text}>
                        <span>Hi</span>
                        <h1>Maxim Bozhko</h1>
                        <p> I am React developer</p>
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </main>
    );
};

export default Main;