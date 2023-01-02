class MaquinaDeCafe {
    capacidadTotal = 100;

    prepararCafe (cantidad) {
        if (cantidad < this.capacidadTotal) {
            return console.log("Acá tienes tu delicioso Café ☕️");
        }

        throw Error("Capacidad máxima excedida");
    }
}

const miCafetera = new MaquinaDeCafe();
miCafetera.prepararCafe(99);
