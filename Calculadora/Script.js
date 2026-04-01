function calcular(operacao) {
    // Captura os valores e converte para decimal
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    // Verifica se os números são válidos
    if (isNaN(n1) || isNaN(n2)) {
        console.warn("Aviso: Digite números válidos nos dois campos.");
        return;
    }

    let resultadoFinal;

    switch (operacao) {
        case 'somar':
            resultadoFinal = n1 + n2;
            document.getElementById("Resultado").innerHTML= resultadoFinal;
            break;
        case 'subtrair':
            resultadoFinal = n1 - n2;
            document.getElementById("Resultado").innerHTML= resultadoFinal;
            break;
        case 'multiplicar':
            resultadoFinal = n1 * n2;
            document.getElementById("Resultado").innerHTML= resultadoFinal;
            break;
        case 'dividir':
            if (n2 === 0) {
                console.error("Erro: Divisão por zero não é permitida.");
                document.getElementById("Resultado").innerHTML= resultadoFinal;
                return;
            }
            default:
            resultadoFinal = n1 / n2;
            document.getElementById("Resultado").innerHTML= resultadoFinal;
            break;
    }

    // Exibe o resultado exatamente na área da imagem que você enviou
    console.log("O resultado da operação é:", resultadoFinal);
}