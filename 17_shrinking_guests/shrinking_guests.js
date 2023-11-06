var names = ["Imran Khan", "Muhammad Ali Jinnah", "Arshad Sharif", "Dr. Arif Alvi"];
var message = ". You are invited to the annual dinner of \"PIAIC\" for the year 2023.";
console.log("Mr/Ms,", names[0], message);
console.log("Mr/Ms,", names[1], message);
console.log("Mr/Ms,", names[2], message);
console.log("Mr/Ms,", names[3], message);
console.log("\nMr/Ms, Muhammad Ali Jinnah will not be able to attend the event.\n");
names[names.indexOf("Muhammad Ali Jinnah")] = "Zia Khan";
console.log("Mr/Ms,", names[0], message);
console.log("Mr/Ms,", names[1], message);
console.log("Mr/Ms,", names[2], message);
console.log("Mr/Ms,", names[3], message);
console.log("\nBig dinning table has been arranged.\n");
names.unshift("Bilal Ismail");
// chose to slit the array at mid and deleting 0 elements we appended to this index an element of ours.
names.splice(names.length / 2, 0, "Khurram Shehzad");
names.push("Zohaib Khan");
// chosing to write a for each loop instead of again and again making redundant the same print statement for each record in my list.
names.forEach(function (name) {
    console.log("Mr/Ms,", name, message);
});
console.log("\nTo the event there can only be invited, 2 guests in total.\n");
var appology_message = "Sincere apologies, due to limited space we are unable to invite all guests to the event.";
while (names.length > 2) {
    console.log("Mr/Ms ", names.pop(), appology_message);
}
// just using this for aline break
console.log("");
// chosing to write a for each loop instead of again and again making redundant the same print statement for each record in my list.
names.forEach(function (name) {
    console.log("Mr/Ms,", name, message);
});
