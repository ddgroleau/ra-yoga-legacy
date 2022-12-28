import styles from '../styles/index.module.scss';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import HomeHeroText from '@/components/HomeHeroText';
import HomeImage from '@/components/HomeImage';
import ClassesPromo from '@/components/ClassesPromo';

const seoDescription = `
Join me every Monday at 4:30pm MST/ 6:30pm EST for All Levels Vinyasa, 
or as it has come to be known as “Virtual Vinyasa” where we come together, 
virtually, to move our bodies and connect with our selves in the comfort of our own home.
`;

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
