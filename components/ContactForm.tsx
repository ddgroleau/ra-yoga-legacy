import React, { useRef, useState } from 'react';
import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleSubmit = () => {
        event?.preventDefault();
        let mailDaemon = 'email@email.com';
        if(nameRef.current && emailRef.current && messageRef.current) {
            let nameElement:HTMLInputElement = nameRef.current;
            let emailElement:HTMLInputElement = emailRef.current;
            let msgElement:HTMLTextAreaElement = messageRef.current;
            
            let msgTemplate = 
                `Hi, my name is ${nameElement.value}, and my email is ${emailElement.value}.\r\r${msgElement.value}\r`;

            let body = encodeURIComponent(msgTemplate);

            const subject = encodeURIComponent("Reaching out from your Yoga Website");
            document.location =`mailto:${mailDaemon}?subject=${subject}&body=${body}`;
            return setWasSubmitted(true);
        } 
        
        return setErrorMsg("Oops, something went wrong. Please try again.");
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className={styles.container}>
            <h1>Contact</h1>
            {!wasSubmitted ? 
                <>
                    <span style={{color:"red"}}>{errorMsg}</span>
                    <div className={styles.formItem}>
                        <label htmlFor='name'>Name</label>
                        <input ref={nameRef} type="text" id="name" required/>
                    </div><div className={styles.formItem}>
                        <label htmlFor='email'>Email</label>
                        <input ref={emailRef} type="email" id="email" required/>
                    </div><div className={styles.formItem}>
                        <label htmlFor='message'>Message</label>
                        <textarea ref={messageRef} id="message" required/>
                    </div>
                    <button className={styles.submitBtn} type="submit">Email Us</button>
                </>
                : 
                <>
                    <p>We will reach out to you shortly as soon as we recieve your email. Thanks for your interest!</p>
                    <button 
                        className={styles.submitBtn} 
                        type="button" 
                        onClick={()=>setWasSubmitted(false)}
                    >
                        Send Another
                    </button>
                </>
            }
        </form>
    );
};

export default ContactForm;