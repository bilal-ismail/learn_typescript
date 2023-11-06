;
function make_album(artist_name, music_title) {
    var temp = {
        a_name: artist_name,
        m_title: music_title
    };
    return temp;
}
var list_collection = [];
list_collection.push(make_album("bait", "dukhre"));
list_collection.push(make_album("sajjad", "tanhaiyaan"));
list_collection.push(make_album("tariq", "man jogi"));
console.log(list_collection);
