let divInputs = document.getElementById("inputs");

for (let i = 0; i < 10; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.id = "num" + i;
    divInputs.appendChild(input);
}

function processar() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(Number(document.getElementById("num" + i).value));
    }

    let soma = numeros.reduce((a, b) => a + b, 0);
    let media = soma / numeros.length;

    let ordenado = [...numeros];
    for (let i = 0; i < ordenado.length; i++) {
        for (let j = i + 1; j < ordenado.length; j++) {
            if (ordenado[i] > ordenado[j]) {
                let temp = ordenado[i];
                ordenado[i] = ordenado[j];
                ordenado[j] = temp;
            }
        }
    }

    let mediana = (ordenado[4] + ordenado[5]) / 2;

    let freq = {};
    let maxFreq = 0;
    let moda = [];

    numeros.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
        if (freq[n] > maxFreq) maxFreq = freq[n];
    });

    for (let n in freq) {
        if (freq[n] === maxFreq && maxFreq > 1) {
            moda.push(Number(n));
        }
    }

    let positivos = 0, negativos = 0, zeros = 0;
    let pares = 0, impares = 0;

    numeros.forEach(n => {
        if (n > 0) positivos++;
        else if (n < 0) negativos++;
        else zeros++;

        if (n % 2 === 0) pares++;
        else impares++;
    });

    let percPares = (pares / 10) * 100;
    let percImpares = (impares / 10) * 100;

    let desvios = numeros.map(n => n - media);

    let semDuplicados = [...new Set(numeros)];
    let quadrados = numeros.map(n => n * n);
    let maiores = numeros.filter(n => n > media);

    let menor = Math.min(...numeros);
    let semMenor = numeros.filter(n => n !== menor);

    let inserir100 = [...numeros];
    inserir100.splice(2, 0, 100);

    let substituir = [...numeros];
    substituir[5] = 999;

    let copiaSem3 = numeros.slice(3);

    let resultado = `

Soma: ${soma}
Média: ${media}
Mediana: ${mediana}
Moda: ${moda.length ? moda : "Sem moda"}

Positivos: ${positivos}
Negativos: ${negativos}
Zeros: ${zeros}
Pares: ${percPares.toFixed(2)}%
Ímpares: ${percImpares.toFixed(2)}%
Desvios: ${desvios}

Ordenado: ${ordenado}
Sem duplicados: ${semDuplicados}
Quadrados: ${quadrados}
Maiores que média: ${maiores}

Sem menor: ${semMenor}
Inserir 100: ${inserir100}
Substituir posição 5: ${substituir}
Remover 3 primeiros: ${copiaSem3}
    `;

    document.getElementById("resultado").textContent = resultado;
}