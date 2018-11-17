define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dto = /** @class */ (function () {
        class Dto {
            constructor(name, image, price, location, zip, rating, hours) {
                this.name = name;
                this.image = image;
                this.price = price;
                this.location = location;
                this.zip = zip;
                this.rating = rating;
                this.hours = hours;
            }
        }
        return Dto;
    }());
    exports.Dto = Dto;
});
