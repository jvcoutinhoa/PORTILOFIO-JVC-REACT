import React, { useEffect, useRef } from 'react';

export function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const heroSection = document.getElementById('hero');

        let width, height, columns;
        let drops = [];
        const fontSize = 16;
        const chars = '01'.split('');

        function initMatrix() {
            if (!heroSection) return;
            width = canvas.width = heroSection.offsetWidth;
            height = canvas.height = heroSection.offsetHeight;
            columns = Math.floor(width / fontSize) + 1;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        }

        window.addEventListener('resize', initMatrix);
        setTimeout(initMatrix, 50);

        function drawMatrix() {
            if (!width || !height) return;

            const isDark = document.body.classList.contains('dark-theme');
            ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.15)' : 'rgba(241, 245, 249, 0.15)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#2563eb';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const intervalId = setInterval(drawMatrix, 40);

        // Função de limpeza do React
        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', initMatrix);
        };
    }, []);

    return (
        <section id="hero">
            <canvas id="matrix-bg" ref={canvasRef}></canvas>
            <div className="hero-content">
                <h1>Desenvolvedor Web em Formação</h1>
                <p>Unindo análise corporativa com desenvolvimento full-stack para criar soluções eficientes.</p>
                <div className="btns">
                    <a href="#projetos" className="btn-primary">Ver Projetos</a>
                    <a href="https://github.com/jvcoutinhoa" target="_blank" rel="noopener noreferrer" className="btn-secondary">Acessar GitHub</a>
                </div>
            </div>
        </section>
    );
}