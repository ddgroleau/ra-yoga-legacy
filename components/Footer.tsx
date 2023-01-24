import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    const ICON_DIMENSION=50;
    return (
        <footer className={styles.container}>
            <section className={styles.topContainer}>
                <div className={styles.top}>
                    <nav className={styles.nav}>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent} >
                                <Link href={"/about"}>About</Link>
                            </span>
                            <span className={styles.navChild} >
                                <Link href={"/about"}>Rachel&apos;s Practice</Link>
                            </span>
                        </span>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent} ><Link href={"/classes"}>Classes</Link></span>
                            <span className={styles.navChild} ><Link href={"/classes"}>Monday Vinyasa</Link></span>
                        </span>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent}><Link href={"/contact"} >Contact</Link></span>
                            <span className={styles.navChild} ><Link href={"/contact"}>Connect with Us!</Link></span>
                        </span>
                    </nav>
                    <section className={styles.social}>
                        <div className={styles.socialRow}>
                            {/* <Link href="https://www.facebook.com" passHref>
                                <Image src="/facebook-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="Facebook" />
                            </Link> */}
                            <Link target="_blank" href="https://www.instagram.com/racharonne/?hl=en" passHref>
                                <Image src="/instagram-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="Instagram" />
                            </Link>
                            {/* <Link href="https://youtube.com" passHref>
                                <Image src="/youtube-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="Youtube" />
                            </Link> */}
                        </div>
                        <div className={styles.socialRow}>
                            {/* <Link href="https://www.linkedin.com" passHref>
                                <Image src="/linkedin-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="LinkedIn" />
                            </Link>
                            <Link href="https://twitter.com" passHref>
                                <Image src="/twitter-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="Twitter Feed" />
                            </Link> */}
                            <Link href="mailto:rachelaronneyoga@gmail.com" passHref>
                                <Image src="/email-icon.svg" 
                                    width={ICON_DIMENSION} height={ICON_DIMENSION} alt="Email" />
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
            <section className={styles.bottom}>
                <div className={styles.bottomLinks}>
                    <small>©{new Date().getFullYear()} Rachel Aronne Yoga</small>
                    <small className={styles.complianceLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/disclaimer">Disclaimer & Cookie Policy</Link>
                        <Link href="/accessibility">Accessibility Statement</Link>
                    </small>
                </div>
            </section>
        </footer>
    );
};

export default Footer;