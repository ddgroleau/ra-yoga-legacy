import React from 'react';

const HomeImage = () => {
    return (
        <div style={{
            backgroundImage:"url('/rachel-mudra-side.jpg')",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width:"100%",
            height: "80vh",
            borderRadius: '10px'
        }}></div>
    );
};

export default HomeImage;