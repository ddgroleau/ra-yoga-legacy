import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/about.module.scss';
import AboutImage from '@/components/AboutImage';
import AboutHeroText from '@/components/AboutHeroText';
import ClassesPromo from '@/components/ClassesPromo';

const seoDescription = `
Join me every Monday at 4:30pm MST/ 6:30pm EST for All Levels Vinyasa, 
or as it has come to be known as “Virtual Vinyasa” where we come together, 
virtually, to move our bodies and connect with our selves in the comfort of our own home.
`;

const About = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <div className={styles.heroContainer}>
                <div className={styles.text}>
                    <AboutHeroText/>
                </div>
                <div className={styles.image}>
                    <AboutImage/>
                </div>
            </div>
            <section className={styles.promoContainer}>
                <ClassesPromo />
            </section>
        </Layout>
    );
};

export default About;