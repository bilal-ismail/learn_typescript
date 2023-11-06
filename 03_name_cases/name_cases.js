function toTitleCase(input) {
    return input.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var name_var = "Bilal Ismail";
console.log(name_var.toLowerCase());
console.log(name_var.toUpperCase());
var titleCaseString = toTitleCase(name_var);
console.log("Title Case String: " + titleCaseString);
// console.log(toTitleCase(person_name));
