
function calcularEMostrarNoConsole() {
    // Captura os dados dos elementos HTML
    const precoAVista = parseFloat(document.getElementById('valorEntrada').value);
    const parcelas = parseInt(document.getElementById('escolhaParcelas').value);

    // Validação básica
    if (isNaN(precoAVista) || precoAVista <= 0) {
        console.warn("Por favor, insira um valor válido.");
        return;
    }

    let totalFinal = 0;
    let descricaoAcrescimo = "";

    // Lógica de cálculo conforme as regras
    if (parcelas === 1) {
        totalFinal = precoAVista;
        descricaoAcrescimo = "Sem acréscimo";
    } else if (parcelas === 3) {
        totalFinal = precoAVista * 1.10; // +10%
        descricaoAcrescimo = "10% de acréscimo";
    } else if (parcelas === 5) {
        totalFinal = precoAVista * 1.20; // +20%
        descricaoAcrescimo = "20% de acréscimo";
    }

    // Cálculo do valor mensal
    const mensalidade = totalFinal / parcelas;

    // EXIBIÇÃO NO CONSOLE (Formatado igual à sua foto)
    console.log("--- NOVO LANÇAMENTO ---");
    console.log("Valor Original: R$ " + precoAVista.toFixed(2));
    console.log("Condição: " + parcelas + "x (" + descricaoAcrescimo + ")");
    console.log("Total Final: R$ " + totalFinal.toFixed(2));
    console.log("Mensalidade: R$ " + mensalidade.toFixed(2));
    console.log("\n"); // Adiciona uma linha em branco para separar os cálculos
}