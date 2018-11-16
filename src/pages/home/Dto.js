define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dto = /** @class */ (function () {
        function Dto(name, image, price, location, rating) {
            this.name = name;
            this.image = image;
            this.price = price;
            this.location = location;
            this.rating = rating;
        }
        return Dto;
    }());
    exports.Dto = Dto;
});
