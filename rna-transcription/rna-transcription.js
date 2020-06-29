//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const conversion = {'A': 'U','C': 'G','G': 'C','T': 'A'};
export const toRna = (dna) => dna.replace( /./g, m => (conversion[m]) )
