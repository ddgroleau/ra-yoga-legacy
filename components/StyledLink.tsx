import Link from 'next/link';
import React from 'react';
import styles from '../styles/StyledLink.module.scss';

const StyledLink = ({href, innerText, scheme}:{href:string,innerText:string, scheme:string}) => {
    return (
        <div className={scheme === 'light' ? styles.light :  styles.dark}>
            <Link href={href}>
                <strong>{innerText}</strong>
            </Link>
        </div>
    );
};

export default StyledLink;