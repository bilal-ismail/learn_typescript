let magicians:string[] = ["jinko", "bakra", "houdinie", "khargosh", "kabootar"];

function show_magicians(list: string[]){
    list.forEach(banda => {
        console.log(banda);
    });
};
function make_great(input: string[]): string[]{
    let output: string[] = [];
    input.forEach((ele) => {
        output.push(`the Great ${ele}`);
    });
    return output;
}
let copy_magicians = [...magicians];
let ret_magicians = make_great(copy_magicians);

// original array
show_magicians(magicians);
// copy of original as is
show_magicians(copy_magicians);
// return result from the copy of original
show_magicians(ret_magicians);