/*
	typeofと違ってnullは弾く
*/
function isObject(arg){
	return arg instanceof Object;
	// return !!arg && arg===Object(arg);
}

export default isObject;
