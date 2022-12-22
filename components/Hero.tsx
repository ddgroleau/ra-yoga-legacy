import styles from '../styles/Hero.module.scss';
import React from 'react';

const Hero = ({textComponent,imgComponent}:{textComponent:any,imgComponent:any}) => {
    return (
        <section className={styles.container}>
            <div className={styles.textContent}>
                {textComponent}
            </div>
            <div className={styles.imgContent}>
                <div className={styles.imgContainer}>
                    {imgComponent}
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Hero;