import React from 'react';
import s from './footer.module.css'
import cs from '../../common/styles.module.css'

const Footer = () => {
    return (
        <section className={s.footerBlock}>
            <div className={cs.container}>
                <div className={s.content}>
                    <h5 className={s.name}>Maxim Bozhko</h5>
                    <div className={s.items}>
                        <div className={s.item}></div>
                        <div className={s.item}></div>
                        <div className={s.item}></div>
                        <div className={s.item}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;