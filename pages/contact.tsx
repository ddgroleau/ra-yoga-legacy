import ClassesPromo from '@/components/ClassesPromo';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';
import React from 'react';
import styles from '../styles/contact.module.scss';

const Contact = () => {
    const seoDescription = ``;
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