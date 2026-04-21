import React from 'react';

export function Sobre() {
    return (
        <section id="sobre">
            <h2>Sobre mim</h2>
            <div className="sobre-grid">
                <img 
                    src="/vignoli.jpg" 
                    alt="Foto de João Vitor" 
                />
                <div className="sobre-texto">
                    <p>Sou um profissional de 29 anos, focado, casado e pai de uma menina de 3 meses. Nesta nova fase da vida, estou em busca de uma fonte de renda remota ou híbrida que me possa dar estabilidade, crescimento a longo prazo e qualidade de vida.</p>
                    <p>Atualmente, estou em imersão total nos estudos práticos de desenvolvimento web e programação, focando os meus conhecimentos na transição de carreira para a área de Tecnologia.</p>
                    <p>O meu objetivo é unir a minha vasta bagagem analítica corporativa com as novas habilidades técnicas que venho estudando e aperfeiçoando a cada dia.</p>
                </div>
            </div>
        </section>
    );
}