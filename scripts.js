function raffle() {

    const minimumNumber = parseInt(document.getElementById('minimum-number').value);
    const maximumNumber = parseInt(document.getElementById('maximum-number').value);
    var drawnNumber = document.getElementById('drawn-number');

    const calc = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber)

    drawnNumber.innerHTML = 'Número sorteado: ' + calc
}

// EXPLICANDO O CÓDIGO.

// 1 - Criei uma função que é chamada ao clicar o botão
// 2 - Criei variáveis para guardar o valor dos números (mínimo e máximo)
// 3 - Criei uma variável que faça o cálculo do número aleatório
