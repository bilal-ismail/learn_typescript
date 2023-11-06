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
names.splice(names.length / 2, 0, "Khurram Shehzad");
names.push("Zohaib Khan");
// chosing to write a for each loop instead of again and again making redundant the same print statement for each record in my list.
names.forEach(function (name) {
    console.log("Mr/Ms,", name, message);
});
