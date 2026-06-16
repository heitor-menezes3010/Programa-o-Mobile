const form = document.getElementById ('CadastroForm');
const displayMsg = document.getElementById ('mensagem');

displayMsg.style.color = "none";
displayMsg.innerText = "";

// valores do Input
try {
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('nome').value.trim();
const idade = document.getElementById('nome').value;
const senha = document.getElementById('nome').value;

//Validação
if (nome.length < 3) {
    throw "O nome é obrigatório e deve ter pelo menos 3 caracteres."
}

if (!email.includes("@")) {
    throw "E-mail inválido. O campo deve conter '@'."
}

if (idade === "" || Number(idade) < 18) {
    throw "Idade inválida. Você deve ter 18 anos ou mais."
}

if (senha.length < 6) {
    throw "A senha é muito curta. Use no mínimo 6 caractere"
}

exibirSucesso("Cadastro realizado com exito!")
form.reset();

} catch (erro) {
    exibirErro(erro);
}

function exibirErro(mensagem) {
    displayMsg.style.display = "block";
    displayMsg.style.backgroundColor = "#f8d7da"
    displayMsg.style.color = "#721c24"
    displayMsg.style.border = "1px solid #f5c6cb"
    displayMsg.innerText = "⚠️ " + mensagem;
}

function exibirSucesso(mensagem) {
    displayMsg.style.display = "block";
    displayMsg.style.backgroundColor = "#d4edda";
    displayMsg.style.color = "#155724";
    displayMsg.style.border = "1px solid #c3e6cb";
    displayMsg.innerText = "✅ " + mensagem;
}
