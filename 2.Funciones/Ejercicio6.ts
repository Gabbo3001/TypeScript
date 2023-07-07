function esPalindromo(cadena: string): boolean {
  const cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();
  const cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
  return cadenaInvertida === cadenaSinEspacios;
}
console.log(esPalindromo("anita lava la tina"))