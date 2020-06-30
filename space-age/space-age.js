//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const years = {'mercury': 7600543.81992,'venus': 19414149.052176, 'earth': 31557600,'mars': 59354032.690079994, 'jupiter': 374355659.124, 'saturn': 929292362.8848,  'uranus': 2651370019.3296, 'neptune': 5200418560.032001};
export const age = (planet, base_age) =>  Math.round(base_age / years[planet] * 100)/100;
