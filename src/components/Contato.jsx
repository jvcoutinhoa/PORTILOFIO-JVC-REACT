import React, { useState } from 'react';

export function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const validarFormulario = (event) => {
        event.preventDefault(); // Evita que a página recarregue

        if (nome === "" || email === "" || msg === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
        } else {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            setNome('');
            setEmail('');
            setMsg('');
        }
    };

    return (
        <section id="contato">
            <h2>Contato</h2>
            <form onSubmit={validarFormulario}>
                <div className="campo">
                    <label htmlFor="nome">Nome Completo:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        placeholder="Ex: João Vitor" 
                        required 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="email">E-mail Profissional:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="seu.email@exemplo.com" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="msg">Como posso ajudar?</label>
                    <textarea 
                        id="msg" 
                        placeholder="Escreva aqui a sua mensagem ou proposta..." 
                        required
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
}