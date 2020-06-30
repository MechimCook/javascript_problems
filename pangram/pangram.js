//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => sentence.replace(/(.)(?=.*\1)|[^a-z]/gi, "").length === 26;
