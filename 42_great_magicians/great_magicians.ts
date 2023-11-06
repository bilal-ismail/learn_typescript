let magicians:string[] = ["jinko", "bakra", "houdinie", "khargosh", "kabootar"];

function show_magicians(list: string[]){
    list.forEach(banda => {
        console.log(banda);
    });
};
function make_great(input: string[]){
    let count = 0;
    input.forEach((ele) => {
        input[count++] = `the Great ${ele}`;
    });
}
make_great(magicians);
show_magicians(magicians);