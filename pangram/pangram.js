//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
const lowercase_sentence = sentence.toLowerCase()
const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

const is_pangram = (letter) => lowercase_sentence.includes(letter);

return ALPHABET.every(is_pangram);
}
