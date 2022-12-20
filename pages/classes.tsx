import Layout from '@/components/Layout';
import React from 'react';

const seoDescription = `
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Classes = () => {
    return (
        <Layout title={'Rachel Aronne Yoga'} description={seoDescription}>
            <div>Classes</div>  
        </Layout>
    );
};

export default Classes;