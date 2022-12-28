import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

type NavbarProps = {
    title:string;
    description:string;
}

const Navbar = ({title,description}:NavbarProps) => {
    const [isToggled,setIsToggled] = useState<boolean|null>(false);
    const { isAuthenticated } = useAuth0();
    const hasBeenToggled = useRef(false);
    const router = useRouter();

    const handleToggle = () => {
        hasBeenToggled.current = true;
        setIsToggled(!isToggled);
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="Rachel Aronne Yoga" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={"/rachel-mudra-side.webp"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Script 
                id="googletagmanager" 
                strategy='lazyOnload' 
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            > */}
            {/* </Script>
            <Script id="googletag" strategy='afterInteractive' dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments);};
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXXXX');
                    `,}}>
            </Script> */}
            <header className={styles.navContainer}>
                <nav className={styles.nav}>
                    <button 
                        className={styles.mobileMenu}
                        onClick={handleToggle}
                    >
                        <Image src="/hamburger.svg" height={20} width={44} alt={"Toggle mobile menu"} />
                    </button>
                    <section 
                        className={`${styles.navLinks} 
                        ${isToggled ? hasBeenToggled.current ? styles.navLinksOpen : '' : 
            hasBeenToggled.current ? styles.navLinksClosed : ''}`}
                    >
                        <span className={router.pathname === "/about" ? styles.active : ""}>
                            <Link href={"/about"}>About</Link>
                        </span>
                        <span className={router.pathname === "/classes" ? styles.active : ""}>
                            <Link href={"/classes"} >Classes</Link>
                        </span>
                        <span className={router.pathname === "/contact" ? styles.active : ""}>
                            <Link href={"/contact"} >Contact</Link>
                        </span>
                        <span className="navBtn">
                            <Link 
                                href='https://www.tickettailor.com/events/rachelaronneyoga/768704#' 
                                target={"_blank"}
                            >
                                Sign Up
                            </Link>
                        </span>
                        {!isAuthenticated ? <LoginButton /> : <LogoutButton/>}
                    </section>
                    <div className={styles.navLogo}>
                        <Link href={"/"}>
                            <Image src="/ra-yoga-logo.svg" height={50} width={70} alt={"Rachel Aronne Yoga"} />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;