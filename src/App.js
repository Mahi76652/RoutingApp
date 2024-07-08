// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <Container>
                <Nav>
                    <ul>
                        <li><StyledLink to="/">Home</StyledLink></li>
                        <li><StyledLink to="/about">About</StyledLink></li>
                        <li><StyledLink to="/contact">Contact</StyledLink></li>
                    </ul>
                </Nav>
                <AnimatePresence>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </Container>
        </Router>
    );
};

const Container = styled.div`
    font-family: Arial, sans-serif;
`;

const Nav = styled.nav`
    background-color: #333;
    padding: 10px;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 0;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }
`;

export default App;
