import ClassesHeroText from '@/components/ClassesHeroText';
import ClassesImage from '@/components/ClassesImage';
import ClassesPromo from '@/components/ClassesPromo';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '../styles/classes.module.scss';

const seoDescription = ``;

const Classes = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <div className={styles.heroContainer}>
                <Hero textComponent={<ClassesHeroText/>} imgComponent={<ClassesImage/>}/>
            </div>
            <section className={styles.promoContainer}>
                <ClassesPromo />
            </section>
        </Layout>
    );
};

export default Classes;