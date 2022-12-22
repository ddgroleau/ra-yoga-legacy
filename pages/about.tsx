import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/about.module.scss';
import AboutImage from '@/components/AboutImage';
import AboutHeroText from '@/components/AboutHeroText';
import ClassesPromo from '@/components/ClassesPromo';

const seoDescription = ``;

const About = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <div className={styles.heroContainer}>
                <Hero textComponent={<AboutHeroText/>} imgComponent={<AboutImage/>}/>
            </div>
            <section className={styles.promoContainer}>
                <ClassesPromo />
            </section>
        </Layout>
    );
};

export default About;