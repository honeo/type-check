/*
	comment
*/
import isNode from './is-node.js';

function isDocumentFragment(arg){
	return isNode(arg) && arg.nodeType===11;
}

export default isDocumentFragment;
