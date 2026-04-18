import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Sobre } from './components/Sobre.jsx';
import { Skills } from './components/Skills.jsx';
import { Projetos } from './components/Projetos.jsx';
import { Contato } from './components/Contato.jsx';
import { Footer } from './components/Footer.jsx';
import './App.css';

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="app-container">
            <Header toggleTheme={toggleTheme} isDark={isDark} />
            <main>
                <Hero />
                <Sobre />
                <Skills />
                <Projetos />
                <Contato />
            </main>
            <Footer />
        </div>
    );
}

export default App;