var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Holy Kaaba", "Germany", "Australia", "Japan", "Canada", "United Kingdom", "Al Aqsa Mosque"];
console.log(places, "\n");
// Alphabetical copy of original print
var temp_list = __spreadArray([], places, true);
temp_list.sort();
temp_list.forEach(function (item) {
    console.log(item);
});
// Original is as is.
console.log(places, "\n");
// reverse alphabetical print
temp_list.reverse();
temp_list.forEach(function (item) {
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
places.forEach(function (place) {
    console.log(place);
});
// just used for a line break
console.log("");
// Original arrays order is changed, reverse alphabetical now.
places.reverse();
places.forEach(function (place) {
    console.log(place);
});
