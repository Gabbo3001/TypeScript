function obtenerPromedio(array: number[]): number {
  if(array.length === 0) {
    return 0;
    }
    else{
    return array.reduce((a, b) => a + b, 0) / array.length;
    }
}

const numeros = [];
console.log(obtenerPromedio(numeros));