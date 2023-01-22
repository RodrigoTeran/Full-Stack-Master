class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentaVelocidad(){
        this.velocidad++;
    }

    reducirVelocidad(){
        this.velocidad--;
    }


}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad, altura){
        super(modelo, velocidad, antiguedad);
        this.altura  = altura;
    }

    mostrarAltura(){
        return `La altura del bus es: ${this.altura}`;
    }
}


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Nissan', 100, 2017);
var coche3 = new Coche('Audi', 250, 2017);
var coche4 = new Coche('Ford', 150, 2017);

console.log(coche1);
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();

console.log(coche1);

var autobus1 = new Autobus('PEGASUS', 100, 2018, 5);
console.log(autobus1);
console.log(autobus1.mostrarAltura());



