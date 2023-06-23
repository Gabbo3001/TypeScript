function obtenerPromedio(numeros: number[]): number {
    if (numeros.length === 0) {
      return 0;
    }
  
    const suma = numeros.reduce((a, b) => a + b, 0);
    const promedio = suma / numeros.length;
    return promedio;
  }
 
  const arregloNumeros = [5, 10, 15, 20];
  const resultado = obtenerPromedio(arregloNumeros);
  console.log(resultado);
  