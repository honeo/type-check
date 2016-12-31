/*
	const obj = {} みたいなの
*/
function isObjectLiteral(arg){
    return arg.__proto__===Object.prototype;
}

export default isObjectLiteral;
