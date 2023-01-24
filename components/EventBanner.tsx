import Link from 'next/link';
import React from 'react';
import variables from '../styles/_variables.module.scss';
import StyledLink from './StyledLink';

const EventBanner = () => {

    return (
        <div style={{
            background: variables.transparentTertiary,
            width: "100vw",
            textAlign: "center",
            paddingBlock: variables.gapMed,
            color: variables.textDark,
            fontWeight: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "row wrap",
            columnGap: "2rem",
            rowGap: "1rem",
            position: "relative",
            borderBottom: `solid ${variables.transparentTertiary} 1px`
        }}>
            <span style={{ maxWidth: "90%", fontSize: variables.fontXL }}>
                Join Rachel in Denver at Rooted Heart Yoga & Wellness on Jan. 30th at 6PM!
            </span>
            <StyledLink
                href="https://rootedheartyw.com/events/" 
                innerText="Sign up here" 
                scheme="light" 
                target="_blank"
            />
        </div>
    );
};

export default EventBanner;