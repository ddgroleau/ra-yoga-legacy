import React, { useEffect, useRef, useState } from 'react';

const HomeImage = () => {
    const [backgroundImage, setBackgroundImage] = useState<string>("url('/rachel-mudra-side.jpg')");
    
    useEffect(()=> {
        if(typeof window !== undefined && window.screen.width >= 768) {
            setBackgroundImage("url('/rachel-arms-up.jpg')");
        }
    },[]);

    return (
        <div 
            datatype='image'
            style={{
                backgroundImage: backgroundImage,
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                width:"100%",
                height: "80vh",
            }}
        ></div>
    );
};

export default HomeImage;