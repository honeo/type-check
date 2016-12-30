/*
	comment
*/
import isNumber from './is-number.js';
import isObject from './is-object.js';

function isNode(arg){
	return isObject(arg) && isNumber(arg.nodeType);
}

export default isNode;
