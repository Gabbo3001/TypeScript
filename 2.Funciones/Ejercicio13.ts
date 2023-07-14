function encontrarNumeroMaximo(...numeros: number[]): number {
    let maximo = -Infinity;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }
    return maximo;
  }

  const maximo = encontrarNumeroMaximo(5, 8, 2, 10, 3);
console.log(`El número máximo es: ${maximo}`);
