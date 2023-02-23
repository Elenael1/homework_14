class Car {
    #engine;
    constructor({ brand, model, price, engine }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.#engine = engine;
    }
    getFullPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    get engine() {
        return this.#engine;
    }
    set engine(newEngine) {
        if (newEngine === "") {
            console.error("Помилка! Kod не може бути пустим!");
            return;
        }
    }

}
const car = new Car({
    brand: "Lamborghini",
    model: "Aventador",
    price: 200000,
    engine: "6,5 L",
});

car.changePrice(250000)
console.log(car)
