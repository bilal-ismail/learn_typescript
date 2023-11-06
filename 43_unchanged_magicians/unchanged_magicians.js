var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["jinko", "bakra", "houdinie", "khargosh", "kabootar"];
function show_magicians(list) {
    list.forEach(function (banda) {
        console.log(banda);
    });
}
;
function make_great(input) {
    var output = [];
    input.forEach(function (ele) {
        output.push("the Great ".concat(ele));
    });
    return output;
}
var copy_magicians = __spreadArray([], magicians, true);
var ret_magicians = make_great(copy_magicians);
// original array
show_magicians(magicians);
// copy of original as is
show_magicians(copy_magicians);
// return result from the copy of original
show_magicians(ret_magicians);
