import ClassesPromo from '@/components/ClassesPromo';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '../styles/contact.module.scss';

const Contact = () => {
    const seoDescription = `
Join me every Monday at 4:30pm MST/ 6:30pm EST for All Levels Vinyasa, 
or as it has come to be known as “Virtual Vinyasa” where we come together, 
virtually, to move our bodies and connect with our selves in the comfort of our own home.
`;
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <div>
                <ContactForm/>
            </div>
            <section className={styles.promoContainer}>
                <ClassesPromo />
            </section>
        </Layout>
    );
};

export default Contact;