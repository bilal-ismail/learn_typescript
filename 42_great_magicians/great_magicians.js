var magicians = ["jinko", "bakra", "houdinie", "khargosh", "kabootar"];
function show_magicians(list) {
    list.forEach(function (banda) {
        console.log(banda);
    });
}
;
function make_great(input) {
    var count = 0;
    input.forEach(function (ele) {
        input[count++] = "the Great ".concat(ele);
    });
}
make_great(magicians);
show_magicians(magicians);
