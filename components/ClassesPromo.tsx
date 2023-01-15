import React from 'react';
import styles from '../styles/ClassesPromo.module.scss';
import StyledLink from './StyledLink';

const ClassesPromo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.imgContainer}>
                    <div className={styles.img}></div>
                </div>
                <div className={styles.textContainer}>
                    <h2>Join Rachel Mondays for All-Levels Virtual Vinyasa!</h2>
                    <p>
                    Join me every Monday at 4:30pm MST/ 6:30pm EST for All Levels Vinyasa, 
                    or as it has come to be known as “Virtual Vinyasa” where we come together, 
                    virtually, to move our bodies and connect with our selves in the comfort of our own home.</p>
                    <p>
                    *Virtual Vinyasa is Donation based, please offer what you are comfortable with.
                    </p>
                    <div className={styles.linkContainer}>
                        <StyledLink scheme={'dark'} href="/classes" innerText='Virtual Classes'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesPromo;