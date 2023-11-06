var names: string[] = ["Imran Khan", "Muhammad Ali Jinnah", "Arshad Sharif", "Dr. Arif Alvi"];
const message: string = ". You are invited to the annual dinner of \"PIAIC\" for the year 2023.";
console.log("Mr/Ms,", names[0], message)
console.log("Mr/Ms,", names[1], message)
console.log("Mr/Ms,", names[2], message)
console.log("Mr/Ms,", names[3], message)

console.log("\nMr/Ms, Muhammad Ali Jinnah will not be able to attend the event.\n");

names[names.indexOf("Muhammad Ali Jinnah")] =  "Zia Khan";

console.log("Mr/Ms,", names[0], message)
console.log("Mr/Ms,", names[1], message)
console.log("Mr/Ms,", names[2], message)
console.log("Mr/Ms,", names[3], message)
