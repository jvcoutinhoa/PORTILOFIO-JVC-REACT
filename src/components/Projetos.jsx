export function Projetos() {
    const meusProjetos = [
        {
            id: 1,
            titulo: "Projeto 01 - E-commerce",
            descricao: "Uma loja virtual feita com HTML, CSS e JavaScript.",
            link: "https://github.com/jvcoutinhoa?tab=repositories"
        },
        {
            id: 2,
            titulo: "Projeto 02 - Portfólio",
            descricao: "Meu portfólio de apresentação feito com tecnologias modernas.",
            link: "https://github.com/jvcoutinhoa?tab=repositories"
        },
        {
            id: 3,
            titulo: "Projeto  - Calculadora de Rescisão Trabalhista",
            descricao: "Sistema web para registrar o ponto dos funcionários.",
            link: "https://jvcoutinhoa.github.io/CALCULADORA-RESCISAO/"
        }
    ];

    return (
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-container">
                {meusProjetos.map((proj) => (
                    <article className="card-projeto" key={proj.id}>
                        <h3>{proj.titulo}</h3>
                        <p>{proj.descricao}</p>
                        <a href={proj.link} target="_blank" rel="noreferrer" className="link-projeto">Ver no GitHub</a>
                    </article>
                ))}
            </div>
        </section>
    );
}