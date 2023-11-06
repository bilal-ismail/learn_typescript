// Test_01
var car = 'daihatsu';
console.log("Is car != 'daihatSu'? I predict True.");
console.log(car != 'daihatSu');
// Test_02
var weather = 'cloudy';
console.log("Is weather == 'clowdy'? I predict True.");
console.log(weather == 'clouwdy');
// Test_03
var day = 'Tuesday';
console.log("Is day == 'tuesday'? I predict True.");
console.log(day.toLowerCase() == 'tuesday');
// Test_04 arrayof characters.
var month = 'August';
console.log("Is month an array? I predict True.");
console.log(Array.isArray(month));
// Test_05
var year = 2022;
console.log("Is year != '2023'? I predict True.");
console.log(year != 2023);
// Test_06
var our_seasons = ['spring', "summer", "autumn", "winter"];
console.log("Is 'fauna' in our_seasons? I predict False.");
console.log(our_seasons.indexOf('fauna'));
// Test_07
console.log("Is 'spring' in our_seasons? I predict True.");
console.log(our_seasons.indexOf('spring'));
// Test_08
var city = 'Milan';
console.log("Is city == 'Milan' or 'milan'? I predict True.");
console.log(city == 'Milan' || "milan");
// Test_09
var univerity = 'Air';
console.log("Is univerity == 'Air'? I predict True.");
console.log(univerity == 'Air' && univerity.length > 2);
// Test_10
var no_of_jeeps = 7;
console.log("Is no_of_jeeps greater than 3? I predict True.");
console.log(no_of_jeeps > 3);
