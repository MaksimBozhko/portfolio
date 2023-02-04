import React from 'react';
import cs from '../../common/styles.module.css'
import s from './skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <section className={s.skillsBlock}>
            <div className={cs.container}>
                <div className={s.skillsContent}>
                    <h2>Skills</h2>
                    <div className={s.skills}>
                        <Skill />
                        <Skill />
                        <Skill />
                        <Skill />
                        <Skill />
                        <Skill />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;