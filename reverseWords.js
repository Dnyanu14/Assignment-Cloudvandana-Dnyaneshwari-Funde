function reverseWord(word) {
    return word.split("").reverse().join("");
}

function reverseWords(sentence) {
    // Split the sentence into words using space as a separator
    const words = sentence.split(" ");

    // Reverse each word using the custom function
    const reversedWords = words.map(function(word) {
        // Reverse each word using the custom function
        return reverseWord(word);
    });

    // Join reversed words into a sentence using space as separator
    const reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
// Output: "sihT si a ynnus yad"
