import React from 'react';
import './styles.css';
 
const ContatoPage: React.FC = () => {
    return (
<div className="container">
<div className="info">
<p><strong>Endereço:</strong> Av. Paulista, 1234 - São Paulo, SP</p>
<p><strong>Telefone:</strong> (11) 1234-5678</p>
<p><strong>Email:</strong> contato@ifood.com</p>
</div>
<form>
<label htmlFor="nome">Nome:</label>
<input type="text" id="nome" name="nome" required />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />
<label htmlFor="mensagem">Mensagem:</label>
<textarea id="mensagem" name="mensagem" required></textarea>
<button type="submit">Enviar</button>
</form>
</div>
    );
}
 
export default ContatoPage;