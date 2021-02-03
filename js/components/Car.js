class Car {
    constructor(tank, consumption) {
        this.ok = true;
        this.engine = false;
        this.mileage = 0;
        this.tank = tank;
        this.consumption = consumption;
    }

    turnOn() {
        if (!this.ok) {
            console.log('Masina neveikia');
        }

        if (!this.engine) {
            this.ok = false;
            this.engine = false;
            console.log('Sveikinu, sugadinai starteri!');
            return false;
        }
        this.engine = true;
        console.log('Variklis ijungtas!');
    }    
    turnOff() {  
        if (this.engine) {
            console.log('Isjungto variklio nemokam isjungti');
        }
        this.engine = false;
        console.log('Variklis isjungtas!');
    }

    drive(distance) {
        if (!this.engine) {
            console.log('Norint vaziuoti - ijunk varikli!');
            return false;
        }
        const maxDistanceAvailable = this.tank / this.consumption * 100;
        if (maxDistanceAvailable >= distance) {
            this.mileage += distance;
            this.tank -= distaance * this.consumption / 100;
            console.log('Nuvaziavo: ', distance);
        } else {
            this.mileage += this.maxDistanceAvailable;
            console.log('Nuvaziavo: ', maxDistanceAvailable);
            this.tank = 0;
            this.turnOff();
            console.log('Bake per mazai norimam atstumui: nuvaziavo ${this.maxDistanceAvailable} ir liko nuvaziuoti ${distance - this.maxDistanceAvailable}');

        }

    }

}

export { Car }