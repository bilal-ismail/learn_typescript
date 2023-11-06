interface Vehicle {
    make:string, 
    model:string, 
    year:number, 
    terrain:string
}; 

const plane: Vehicle= {

    make: "boeing",
    model: "737",
    year: 2020,
    terrain: "air"
};

const train: Vehicle= {

    make: "JR",
    model: "2124",
    year: 2022,
    terrain: "railroad"
};

console.log(plane);
console.log(train);