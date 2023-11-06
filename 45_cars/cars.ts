interface Car {
    [key: string]:string;
};

function make_cars(manufacturer_name: string, model_input:string, ...arg: [string,string][]): Car{
    const car:Car = {
    };
    car["manufacturer"] = manufacturer_name;
    car["model"] = model_input;
    for(const [key, value] of arg){
        car[key] = value;
    };
    return car;    
}

console.log(make_cars("mazda", "929", ["color", "red"], ["year", "1982"]));
console.log(make_cars("subaru", "impretza", ["color", "green"]));
console.log(make_cars("datsun", "bluebird", ["color", "silver"], ["year", "1968"], ["type", "gasoline"]));