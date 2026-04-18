export function Header({ toggleTheme, isDark }) {
    return (
        <header>
            <div className="logo">JV<span>Coutinho</span></div>
            <nav>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <button id="theme-toggle" onClick={toggleTheme}>
                <i className={isDark ? "ph ph-sun" : "ph ph-moon"}></i>
            </button>
        </header>
    );
}