
// 型・インスタンス
import isArray from './lib/is-array.js';
import isBoolean from './lib/is-boolean.js';
import isFunction from './lib/is-function.js';
import isNumber from './lib/is-number.js';
import isRegExp from './lib/is-reg-exp.js';
import isString from './lib/is-string.js';
import isUndefined from './lib/is-undefined.js';
import isNull from './lib/is-null.js';
import isNaN from './lib/is-nan.js';
import isDate from './lib/is-date.js';
import isEvent from './lib/is-event.js';
import isEventTarget from './lib/is-event-target.js';
import isObject from './lib/is-object.js';
import isPromise from './lib/is-promise.js';
// 数値の内容判定
import isOdd from './lib/is-odd.js';
import isEven from './lib/is-even.js';
import isMultiple from './lib/is-multiple.js';
// DOM
import isNode from './lib/is-node.js';
import isTextNode from './lib/is-text-node.js';
import isElement from './lib/is-element.js';
import isDocumentFragment frmo './lib/is-document-fragment.js';
// 雑多
import isTrue from './lib/is-true.js';
import isFalse from './lib/is-false.js';
import isTruthy from './lib/is-truthy.js';
import isFalsy from './lib/is-falsy.js';
import isArrayLike from './lib/is-array-like.js';
import isComparisonOperator from './lib/is-comparison-operator.js';
import isSemVer from './lib/is-sem-ver.js';
import isVersion from './lib/is-version.js';
import isEmpty from './lib/is-empty.js';


/*
	可変長引数に対応するものはbaseに
	そうでないものはisに登録する
*/
const base = {}
const is = {}

/*
	型チェック
*/
base.array = isArray;
base.arr = isArray;

base.boolean = isBoolean;
base.bool = isBoolean;

base.function = isFunction;
base.func = isFunction;

base.number = isNumber;
base.num = isNumber;

base.regexp = isRegExp;
base.re = isRegExp;

base.string = isString;
base.str = isString;

base.undefined = isUndefined;
base.null = isNull;

base.nan = isNaN;

/*
	インスタンス判定
*/
base.date = isDate;

base.event = isEvent;

base.eventtarget = isEventTarget;

base.object = isObject;
base.obj = isObject;

base.promise = isPromise;



/*
	Numberの内容判定
*/
base.odd = isOdd;
base.even = isEven;
is.multiple = isMultiple;

/*
	DOM
*/
base.node = isNode;

base.textnode = isTextNode;

base.element = isElement;

base.documentfragment = isDocumentFragment;
base.df = isDocumentFragment;


/*
	その他
*/

base.true = isTrue;

base.false = isFalse;

base.truthy = isTruthy;

base.falsy = isFalsy;

base.arraylike = isArrayLike;

base.comparisonoperator = isComparisonOperator;

base.semver = isSemVer;

base.version = isVersion;

base.empty = isEmpty;

/*
	is
		baseを可変長引数化
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
