/*
	偶数判定（0含む)
*/
import isNumber from './is-number.js';

function isOdd(num){
	return isNumber(num) &&	!(num % 2);
}

export default isOdd;
