function toTitleCase(input: string): string {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
  }  

const name_var = "Bilal Ismail";

console.log(name_var.toLowerCase());
console.log(name_var.toUpperCase());

  
const titleCaseString: string = toTitleCase(name_var);

console.log("Title Case String: " + titleCaseString);