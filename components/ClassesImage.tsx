import React from 'react';

const ClassesImage = () => {
    return (
        <div 
            datatype='image'
            style={{
                backgroundImage:"url('/rachel-side-crow.webp')",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                width:"100%",
                height: "75vh",
            }}
        ></div>
    );
};

export default ClassesImage;