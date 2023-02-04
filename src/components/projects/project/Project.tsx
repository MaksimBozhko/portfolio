import React from 'react';
import s from './project.module.css'

const Project = () => {
    return (
        <div className={s.projectItem}>
            <div className={s.imgContainer}>
                <a href="">Watch</a>
            </div>
            <h4 className={s.title}>name project</h4>
            <p className={s.description}>description</p>
        </div>
    );
};

export default Project;