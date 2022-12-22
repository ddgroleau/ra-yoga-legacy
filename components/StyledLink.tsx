import Link from 'next/link';
import React from 'react';
import styles from '../styles/StyledLink.module.scss';

type StyledLinkProps = {
    href:string,
    innerText:string, 
    scheme:string, 
    target?:string|undefined
}

const StyledLink = ({href, innerText, scheme, target}:StyledLinkProps) => {
    return (
        <div className={scheme === 'light' ? styles.light :  styles.dark}>
            <Link href={href} target={target}>
                <strong>{innerText}</strong>
            </Link>
        </div>
    );
};

export default StyledLink;