import React from 'react';

const AboutImage = () => {
    return (
        <div style={{
            backgroundImage:"url('/rachel-mudra-front.webp')",
            backgroundPosition:"top center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            width:"100%",
            height: "70vh",
            maxHeight: "600px",
            borderRadius: "6px"
        }}></div>
    );
};

export default AboutImage;