//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resistors) => {
  var text = `${COLORS.indexOf(resistors[0])}${COLORS.indexOf(resistors[1])}`;
  return parseInt(text);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
