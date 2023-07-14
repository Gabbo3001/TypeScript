function calcularFactorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }

  const numeroF = 5;
  const factorial = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${factorial}`);
  