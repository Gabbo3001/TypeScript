class Rectangulo {
    base: number;
    altura: number;

   constructor(base: number, altura: number){
    this.base = base;
    this.altura = altura;
   } 
   area(){
    return this.base * this.altura;
   }
}