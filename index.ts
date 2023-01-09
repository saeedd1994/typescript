class Car {

    color: string= 'red';
    year: number = 1994
    // constructor(color: string, year: number) {
    //     this.color= color;
    //     this.year= year;
    // }
    drive(): void{
        console.log('I am driving now...');
    }
}

const car = new Car();
console.log(car.year, car.color)
console.log(car.drive());