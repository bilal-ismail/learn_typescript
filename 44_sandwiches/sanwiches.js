function place_order(items) {
    console.log("The sandwich will comprise of the following ingredients:-");
    var count = 0;
    items.forEach(function (element) {
        console.log(++count, ") - ", element);
    });
}
place_order(["cheeze", "tomatoes", "onions", "olives", "mushrooms", "chicken", "chillies"]);
place_order(["cheeze", "tomatoes", "olives", "mushrooms", "chillies"]);
place_order(["cheeze", "chicken", "chillies"]);
