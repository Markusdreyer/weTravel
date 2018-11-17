export class Dto {
    name: string;
    image: string;
    price: string;
    location: string;
    zip: string;
    rating: string;
    hours: string;

    constructor(name: string, image: string, price: string, location: string, zip: string, rating: string, hours: string) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.location = location;
        this.zip = zip;
        this.rating = rating;
        this.hours = hours;
    }

}