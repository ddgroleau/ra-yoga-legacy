import styles from '../styles/Hero.module.scss';
import React from 'react';

const Hero = ({textComponent,imgComponent}:{textComponent:any,imgComponent:any}) => {
    return (
        <section className={styles.container}>
            <div className={styles.textContent}>
                {textComponent}
            </div>
            <div className={styles.imgContainer}>
                {imgComponent}
            </div>
        </section>
    );
};

export default Hero;