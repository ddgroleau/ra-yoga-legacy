import styles from '../styles/index.module.scss';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import HomeHeroText from '@/components/HomeHeroText';
import HomeImage from '@/components/HomeImage';
import ClassesPromo from '@/components/ClassesPromo';

const seoDescription = `
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <section className={styles.heroContainer}>
                <Hero textComponent={<HomeHeroText/>} imgComponent={<HomeImage/>}/>
            </section>
            <section className={styles.promoContainer}>
                <ClassesPromo />
            </section>
        </Layout>
    );
};

export default Home;
