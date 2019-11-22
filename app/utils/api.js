import axios from 'axios'

//Get the lyrics which is a list of the lyrics lines
async function fetchLyrics(artist, numberLines, maxSyllables) {

    const obj = {
        artist: artist,
        lyric_length: numberLines,
        max_syllables: maxSyllables,
    };

    return await axios.post('https://ai-labs-226917.appspot.com', obj).then(response => {
        return response.data.lyrics
    }).catch(function(error) {
        return []
    });

    // return await axios.post('http://127.0.0.1:5000/', obj).then(response => {
    //     return response.data.lyrics
    // }).catch(function(error) {
    //     return []
    // });
}

export async function getLyrics (artist, numberLines, maxSyllables) {
    const [ lyrics] = await Promise.all([
        fetchLyrics(artist, numberLines, maxSyllables)
    ]);

    if(lyrics.length === 0) {
        return []
    } else {
        return lyrics.splice(0, 32)
    }
}