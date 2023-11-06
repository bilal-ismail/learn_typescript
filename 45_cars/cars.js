;
function make_cars(manufacturer_name, model_input) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var car = {};
    car["manufacturer"] = manufacturer_name;
    car["model"] = model_input;
    for (var _a = 0, arg_1 = arg; _a < arg_1.length; _a++) {
        var _b = arg_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    ;
    return car;
}
console.log(make_cars("mazda", "929", ["color", "red"], ["year", "1982"]));
console.log(make_cars("subaru", "impretza", ["color", "green"]));
console.log(make_cars("datsun", "bluebird", ["color", "silver"], ["year", "1968"], ["type", "gasoline"]));
