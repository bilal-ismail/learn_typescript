var list = ["Laptop", "Bag", "Charger", "Pen drive", "Workbook", "Pencil"];
console.log("Some essentials for a workbench are listed as follows:-");
var index = 0;
list.forEach(function (element) {
    console.log(++index, ") - ", element);
});
