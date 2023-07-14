function esPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }

const numeroP = 17;
const esPrimoNumero = esPrimo(numeroP);
console.log(`¿El número ${numeroP} es primo? ${esPrimoNumero}`);
