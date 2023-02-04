import React from 'react';
import s from './contacts.module.css'
import cs from '../../common/styles.module.css'

const Contacts = () => {
    return (
        <section className={s.contactsBlock}>
            <div className={cs.container}>
                <div className={s.contactsContainer}>
                    <h3 className={s.title}>Contacts</h3>
                    <form className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                        <button className={s.btnSend}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;