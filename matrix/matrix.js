//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  matrix = []
  constructor(string) {
    const STRING_ROWS = string.split('\n');
    const LEN = STRING_ROWS.length;
    for (var i = 0; i < LEN; i++) {
      this.matrix.push(STRING_ROWS[i].split` `.map(x=>+x));
    }
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return Object.keys(this.matrix[0])
        .map(colNumber => this.matrix.map(row => row[colNumber]));
  }
}
