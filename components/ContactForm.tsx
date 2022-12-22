import React, { useRef, useState } from 'react';
import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
        event?.preventDefault();
        let body = '';
        let mailDaemon = 'email@email.com';
        if(messageRef.current) {
            let element:HTMLTextAreaElement = messageRef.current;
            body = encodeURIComponent(element.value+ "\r");
        }
        const subject = encodeURIComponent("Reaching out from your Yoga Website");
        document.location =`mailto:${mailDaemon}?subject=${subject}&body=${body}`;
        setWasSubmitted(true);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className={styles.container}>
            <h1>Contact</h1>
            {!wasSubmitted ? 
                <>
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
                    <button className={styles.submitBtn} type="submit">Submit</button>
                </>
                : 
                <>
                    <p>Thanks for submitting your message. We will reach out to you shortly.</p>
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