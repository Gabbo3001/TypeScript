class Persona {
    nombre: string;
    edad: number;
    profesion: string;

    constructor(nombre:string, edad:number, profesion:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y "wa" ser ${this.profesion}`);
    }
}

const persona1 = new Persona("Gabriel", 26, "Programador");

persona1.saludar();