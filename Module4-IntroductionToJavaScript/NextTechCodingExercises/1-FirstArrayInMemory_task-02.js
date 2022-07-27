//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
    //your code here
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result = result + " " + words[i].trim();
        console.log("result: " + result.trim());
    }
    console.log(result.trim());
    return result.trim();
}

//console log results
console.log('results', wordsToSentence(['hey', 'there']));

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = {
        wordsToSentence,
    };
}
