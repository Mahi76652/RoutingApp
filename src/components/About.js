// src/components/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const About = () => {
    const navigate = useNavigate();

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>About</h2>
            <p>This is the About page.</p>
            <Button onClick={() => navigate('/contact')}>Go to Contact</Button>
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
    background-color: #2196f3;
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1976d2;
    }
`;

export default About;
