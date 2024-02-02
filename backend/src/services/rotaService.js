const { Cliente } = require('../../src/models/cliente');


// Função para gerar permutações
function permute(array) {
  const result = [];

  function swap(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function generate(n) {
    if (n === 1) {
      result.push(array.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      generate(n - 1);
      swap(n % 2 === 0 ? i : 0, n - 1);
    }
  }

  generate(array.length);
  return result;
}


// Função que calcula a distância entre dois clientes
function calcularDistancia(cliente1, cliente2) {
  // Usando o teorema de Pitágoras
  const distanciaX = Math.abs(cliente1.enderecoX - cliente2.enderecoX);
  const distanciaY = Math.abs(cliente1.enderecoY - cliente2.enderecoY);
  // Math.sqrt traz a raiz quadrada dos números
  return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
}

// Função que calcula a distância total percorrida ao visitar os clientes na ordem dada
function calcularDistanciaTotal(ordemClientes) {
  let distanciaTotal = 0;
  for (let i = 0; i < ordemClientes.length - 1; i++) {
    distanciaTotal += calcularDistancia(ordemClientes[i], ordemClientes[i + 1]);
  }
  return distanciaTotal;
}

// Função principal para otimizar as rotas
function otimizarRotas(clientes) {
  // Gera todas as permutações possíveis dos clientes
  const todasPermutacoes = permute([...clientes]);

  // A melhor ordem e a menor distância com valores iniciais
  let melhorOrdem = null;
  let menorDistancia = Infinity;

  // Percorre todas as rotas geradas
  todasPermutacoes.forEach((ordemClientes) => {
    const distanciaAtual = calcularDistanciaTotal(ordemClientes);

    if (distanciaAtual < menorDistancia) {
      menorDistancia = distanciaAtual;
      melhorOrdem = [...ordemClientes];
    }
  });

  // Retorna a melhor ordem encontrada
  return melhorOrdem;
}

module.exports = {
  otimizarRotas,
};