class Car {

    public color: string;
    private readonly year: number
    constructor(color: string, year: number) {
        this.color= color;
        this.year= year;
    }

    drive(): void{
        console.log(this.year)
        console.log('I am driving now...');
    }

}

const car = new Car('red', 1994);
car.drive();