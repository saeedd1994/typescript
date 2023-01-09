interface Drivable {
    year: number;
    color: string;

    drive(): string;

}

class Car implements Drivable {
    year= 1994;
    color= 'red';


    drives(): string {
        return `hello this car made at ${this.year} and color is ${this.color}`
    }

    drive(): string {
        return "";
    }
}

const car = new Car();
console.log(car.drives())