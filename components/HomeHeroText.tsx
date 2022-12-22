import React from 'react';
import StyledLink from './StyledLink';
import styles from '../styles/HomeHeroText.module.scss';

const HomeHeroText = () => {
    return (
        <div className={styles.container}>
            <h1>Rachel Aronne</h1>
            <h2>Maine Yoga Teacher</h2>
            <div className={styles.linkContainer}>
                <StyledLink scheme={'light'} href="/about" innerText='Learn More' />
            </div>
        </div>
    );
};

export default HomeHeroText;