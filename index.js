/*
	可変長引数に対応するものはbaseに
	そうでないものはisに登録する
*/
const base = {}
const is = {}

/*
	型チェック
*/
function isArray(arg){
	return Array.isArray(arg);
}
base.array = isArray;
base.arr = isArray;

function isBoolean(arg){
	return typeof arg==='boolean';
}
base.boolean = isBoolean;
base.bool = isBoolean;

function isFunction(arg){
	return typeof arg==='function';
}
base.function = isFunction;
base.func = isFunction;

function isNumber(arg){
	return typeof arg==='number';
}
base.number = isNumber;
base.num = isNumber;

function isRegExp(arg){
	return arg instanceof RegExp;
}
base.regexp = isRegExp;
base.re = isRegExp;

function isString(arg){
	return typeof arg==='string';
}
base.string = isString;
base.str = isString;



/*
	インスタンス判定
*/

// typeofと違ってnullは弾く
function isObject(arg){
	return arg instanceof Object;
}
base.object = isObject;
base.obj = isObject;

// 引数がPromiseインスタンスか
function isPromise(arg){
	return arg instanceof Promise;
}
base.promise = isPromise;



/*
	DOM
*/
function isNode(arg){
	return !!arg && typeof arg==='object' && !!arg.nodeType;
}
base.node = isNode;

function isTextNode(arg){
	return isNode(arg) && arg.nodeType===3;
}
base.textnode = isTextNode;

function isElement(arg){
	return isNode(arg) && arg.nodeType===1;
}
base.element = isElement;

function isDocumentFragment(arg){
	return isNode(arg) && arg.nodeType===11;
}
base.documentfragment = isDocumentFragment;
base.df = isDocumentFragment;


/*
	その他
*/
function isTrue(arg){
	return arg===!0;
}
base.true = isTrue;

function isFalse(arg){
	return arg===!1;
}
base.false = isFalse;

function isTruthy(arg){
	return !!arg;
}
base.truthy = isTruthy;

function isFalsy(arg){
	return !arg;
}
base.falsy = isFalsy;

// 定義: .lengthを持つtruthyなオブジェクト
function isArrayLike(arg){
	return !!arg && arg.hasOwnProperty('length');
}
base.arraylike = isArrayLike;

/*
	可変長引数化
		引数があれば判定関数を渡してevery
		なければfalseを返す
*/
for(let [key, func] of Object.entries(base)){
	is[key] = (...args)=>{
		return args.length ?
			args.every(func):
			false;
	}
}

export default is;
