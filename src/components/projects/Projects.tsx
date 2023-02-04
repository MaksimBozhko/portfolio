import React from 'react';
import s from './projects.module.css'
import cs from '../../common/styles.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={cs.container}>
                <div className={s.projectsContent}>
                    <h2>My projects</h2>
                    <div className={s.projectsItems}>
                        <Project/>
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;