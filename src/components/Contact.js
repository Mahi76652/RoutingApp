// src/components/Contact.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Contact</h2>
            <p>Get in touch with us through the Contact page.</p>
            <Button onClick={() => navigate('/')}>Go to Home</Button>
        </Container>
    );
};

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f0f0f0;
    color: #333;
    padding: 20px;
`;

const Button = styled.button`
    background-color: #f44336;
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d32f2f;
    }
`;

export default Contact;
