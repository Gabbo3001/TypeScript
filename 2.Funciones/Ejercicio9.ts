/*usando typescripy ayudame, a Crear una función llamada convertirFahrenheitACelsius que tome una
temperatura en grados Fahrenheit como parámetro y la convierta a grados Celsius.*/
function convertir(Fahrenheit: number): number {
    const celsius = (Fahrenheit - 32) * 5 / 9;
    return celsius;
  }

