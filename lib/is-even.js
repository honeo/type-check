/*
	偶数判定（0含む)
*/
import isNumber from './is-number.js';

// 奇数判定
function isEven(num){
	return isNumber(num) && !!(num % 2);
}

export default isEven;
