function invertirCadena(cadena: string): string {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena.charAt(i);
    }
    return cadenaInvertida;
  }

  const cadenaOriginal = 'Hola, mundo!';
  const cadenaInvertida = invertirCadena(cadenaOriginal);
  console.log(`Cadena original: ${cadenaOriginal}`);
  console.log(`Cadena invertida: ${cadenaInvertida}`);
  