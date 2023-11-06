interface Music_Album{
        a_name:string;
        m_title:string;
};

function make_album(artist_name: string, music_title: string): Music_Album{
    const temp: Music_Album = {
        a_name : artist_name,
        m_title : music_title
    };
    return temp;
}

let list_collection: Music_Album[] = [];

list_collection.push(make_album("bait", "dukhre"));
list_collection.push(make_album("sajjad", "tanhaiyaan"));
list_collection.push(make_album("tariq", "man jogi"));

console.log(list_collection);