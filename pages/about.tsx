import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/about.module.scss';
import AboutImage from '@/components/AboutImage';
import AboutHeroText from '@/components/AboutHeroText';
import ClassesPromo from '@/components/ClassesPromo';

const seoDescription = `
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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