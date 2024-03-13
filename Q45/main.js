function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add any additional options to the car object
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        var value = option[key];
        car[key] = value;
    });
    return car;
}
// Call the function with required and optional arguments
var car1 = carInfo("civi", "2019", { color: "blue" }, { sunroof: true });
console.log(car1);
