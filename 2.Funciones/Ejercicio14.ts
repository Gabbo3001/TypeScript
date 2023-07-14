function obtenerDiasTranscurridos(fechaInicial: Date, fechaFinal: Date): number {
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
    
    // Redondear las fechas al comienzo del día
    const fechaInicioSinHora = new Date(fechaInicial.getFullYear(), fechaInicial.getMonth(), fechaInicial.getDate());
    const fechaFinSinHora = new Date(fechaFinal.getFullYear(), fechaFinal.getMonth(), fechaFinal.getDate());
    
    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferenciaMilisegundos = Math.abs(fechaFinSinHora.getTime() - fechaInicioSinHora.getTime());
    
    // Calcular la cantidad de días redondeando hacia abajo
    const diasTranscurridos = Math.floor(diferenciaMilisegundos / unDiaEnMilisegundos);
  
    return diasTranscurridos;
  }
  
const fechaInicio = new Date('2023-01-01');
const fechaFin = new Date('2023-01-10');
const diasTranscurridos = obtenerDiasTranscurridos(fechaInicio, fechaFin);
console.log(`Días transcurridos: ${diasTranscurridos}`);
