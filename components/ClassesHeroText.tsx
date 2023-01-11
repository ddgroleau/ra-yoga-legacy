import React from 'react';
import styles from '../styles/ClassesHeroText.module.scss';
import StyledLink from './StyledLink';

const ClassesHeroText = () => {
    return (
        <div className={styles.container}>
            <h1>Class Schedule</h1>
            <h2>All Levels Vinyasa: Virtual Vinyasa</h2>
            <ul>
                <li>Every Monday at 4:30MT/ 6:30ET</li>
            </ul>
            <div className={styles.linkContainer}>
                <StyledLink 
                    scheme={'dark'} 
                    href="https://www.tickettailor.com/events/rachelaronneyoga/768704#" 
                    innerText='Sign Up' 
                    target={"_blank"}
                />
            </div>
        </div>
    );
};

export default ClassesHeroText;