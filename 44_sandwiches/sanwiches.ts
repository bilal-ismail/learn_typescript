function place_order(items:string[]){
    console.log("The sandwich will comprise of the following ingredients:-");
    let count:number = 0;
    items.forEach(element => {
        console.log(++count, ") - ", element);
    });
}

place_order(["cheeze", "tomatoes", "onions", "olives", "mushrooms", "chicken", "chillies"]);
place_order(["cheeze", "tomatoes", "olives", "mushrooms", "chillies"]);
place_order(["cheeze", "chicken", "chillies"]);