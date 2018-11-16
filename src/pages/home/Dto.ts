export class Dto {
    name: string;
    image: string;
    price: string;
    location: string;
    rating: number;
    zip: string;

    constructor(name: string, image: string, price: string, location: string, zip: string, rating: number) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.zip = zip;
    }

}