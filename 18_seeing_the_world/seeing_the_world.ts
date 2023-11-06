let places: string[] = ["Holy Kaaba", "Germany", "Australia", "Japan", "Canada", "United Kingdom", "Al Aqsa Mosque"];

console.log(places, "\n");

// Alphabetical copy of original print
let temp_list = [...places];
temp_list.sort();
temp_list.forEach((item) => {
    console.log(item);
});


// Original is as is.
console.log(places, "\n");

// reverse alphabetical print
temp_list.reverse();
temp_list.forEach((item) => {
    console.log(item);
});

// Original is as is.
console.log(places, "\n");

// Original's order has been changed (reversed)'.
places.reverse();
console.log(places, "\n");

// Original is as it was.
places.reverse();
console.log(places, "\n");

// Original arrays order is changed, alphabetical now.
places.sort();
places.forEach((place) => {
    console.log(place);
});

// just used for a line break
console.log("")

// Original arrays order is changed, reverse alphabetical now.
places.reverse();
places.forEach((place) => {
    console.log(place);
});