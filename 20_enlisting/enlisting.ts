let list: string[] = ["Laptop", "Bag", "Charger", "Pen drive", "Workbook", "Pencil"];

console.log("Some essentials for a workbench are listed as follows:-");
let index = 0;
list.forEach(element => {
    console.log(++index, ") - ", element);
});