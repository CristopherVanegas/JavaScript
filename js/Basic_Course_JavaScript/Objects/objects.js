
var miAuto = {
    marca: 'toyota',
    modelo: 'Corolla',
    annio: 2020,

    detalleDelAuto: function () {
        console.log(`Auto: ${this.modelo} ${this.annio}`);  // this.    references to dad object
    }
};

