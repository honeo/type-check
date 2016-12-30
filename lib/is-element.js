/*
	comment
*/
import isNode from './is-node.js';

function isElement(arg){
	return isNode(arg) && arg.nodeType===1;
}

export default isElement;
