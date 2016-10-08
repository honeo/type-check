console.log('type-check: test');

// jsdom + var
const JSDOM = require('jsdom');
global.document = JSDOM.jsdom('hogehoge');
global.head = document.head;
global.window = document.defaultView;
global.Node = window.Node;

// babel
require("babel-register")({
	presets: ['latest', 'stage-0']
});

// modules
const is = require('../').default;

// Cases
const cases = {}



/// type

// array, arr
cases.array = (arg)=>{
	return !is.array()
		&& is.array([])
		&& is.arr([])
		&& is.arr([], [])
		&& !is.arr('array!')
		&& !is.arr([], true);
}

// boolean, bool
cases.boolean = (arg)=>{
	return !is.boolean()
		&& is.boolean(true)
		&& is.bool(false)
		&& is.bool(true, false)
		&& !is.bool('boolean!')
		&& !is.bool(true, 'true');
}

// function, func
cases.function = (arg)=>{
	const f = function(){};
	return !is.function()
		&& is.function(f)
		&& is.func(f)
		&& is.func(f, f)
		&& !is.func('function!')
		&& !is.func(f, true);
}

// number, num
cases.number = (arg)=>{
	return !is.number()
		&& is.number(123)
		&& is.num(45)
		&& is.num(22, 80, 443)
		&& !is.num('number!')
		&& !is.num(1, true);
}

// regexp, re
cases.regexp = (arg)=>{
	const r = /hoge/;
	return !is.regexp()
		&& is.regexp(r)
		&& is.re(r)
		&& is.re(r, r)
		&& !is.re('rexexp!')
		&& !is.re(r, true);
}

// string, str
cases.string = (arg)=>{
	return !is.string()
		&& is.string('hoge')
		&& is.str('fuga')
		&& is.str('foo', 'bar')
		&& !is.str(123)
		&& !is.str('piyo', true);
}

// undefined
cases.undefined = (arg)=>{
	return !is.undefined()
		&& is.undefined(undefined)
		&& is.undefined(undefined, undefined)
		&& !is.undefined(null);
}

// null
cases.null = (arg)=>{
	return !is.null()
		&& is.null(null)
		&& is.null(null, null)
		&& !is.null(undefined);
}

// NaN
cases.nan = (arg)=>{
	return !is.nan()
		&& is.nan(NaN)
		&& is.nan(NaN, NaN)
		&& !is.nan(undefined);
}



/// instance

// date
cases.date = (arg)=>{
	return !is.date()
		&& !is.date({})
		&& !is.date('date object')
		&& is.date(new Date());
}

// object, obj
cases.object = (arg)=>{
	return !is.object()
		&& is.object({})
		&& is.obj({})
		&& is.obj({}, {})
		&& !is.obj('object!')
		&& !is.obj({}, true);
}

// promise
cases.orinuse = (arg)=>{
	const p = new Promise(_=>_);
	return !is.promise()
		&& is.promise(p)
		&& is.promise(p, p)
		&& !is.promise('promise!')
		&& !is.promise(p, true);
}



/*
	Number
*/

// odd
cases.odd = (arg)=>{
	return is.odd(0)
		&& is.odd(2)
		&& is.odd(4, 6)
		&& !is.odd(8, 9)
		&& !is.odd('oddnumber!');
}

// even
cases.even = (arg)=>{
	return is.even(1)
		&& is.even(3)
		&& is.even(5, 7)
		&& !is.even(9, 10)
		&& !is.even('evennumber!');
}

// multiple
cases.multiple = (arg)=>{
	return is.multiple(4, 2)
		&& is.multiple(8080, 80)
		&& !is.multiple(151, 50)
		&& !is.multiple('multiple!');
}



/// DOM
const textnode = document.createTextNode('');
const element = document.createElement('div');

// node
cases.node = (arg)=>{
	return !is.node()
		&& is.node(textnode)
		&& is.node(element)
		&& is.node(textnode, element)
		&& !is.node('node!')
		&& !is.node(textnode, true);
}

// textnode
cases.textnode = (arg)=>{
	return !is.textnode()
		&& is.textnode(textnode)
		&& is.textnode(textnode, textnode)
		&& !is.textnode('textnode!')
		&& !is.textnode(textnode, true);
}

// element
cases.element = (arg)=>{
	return !is.element()
		&& is.element(element)
		&& is.element(element, element)
		&& !is.element('element!')
		&& !is.element(element, true);
}

// documentfragment, df
cases.documentfragment = (arg)=>{
	const df = document.createDocumentFragment();
	return !is.documentfragment()
		&& is.documentfragment(df)
		&& is.df(df)
		&& is.df(df, df)
		&& !is.df('documentfragment!')
		&& !is.df(df, true);
}



/*
	Other
*/

// true
cases.true = (arg)=>{
	return !is.true()
		&& is.true(true)
		&& is.true(true, true)
		&& !is.true('true!')
		&& !is.true(true, false);
}

// false
cases.false = (arg)=>{
	return !is.false()
		&& is.false(false)
		&& is.false(false, false)
		&& !is.false('false!')
		&& !is.false(false, true);
}

// truthy
cases.truthy = (arg)=>{
	return !is.truthy()
		&& is.truthy(true)
		&& is.truthy("hoge", 123, [], {})
		&& !is.truthy(null, undefined)
		&& !is.truthy(true, false);
}

// falsy
cases.falsy = (arg)=>{
	return !is.falsy()
		&& is.falsy(false)
		&& is.falsy("", 0, null, undefined, NaN)
		&& !is.falsy(true, "hoge", 123)
		&& !is.falsy(true, false);
}

// arraylike
cases.arraylike = (arg)=>{
	return !is.arraylike()
		&& is.arraylike([])
		&& is.arraylike('hoge', {length: 0})
		&& !is.arraylike(12345)
		&& !is.arraylike([], undefined);
}


// 本体
for(let [key, value] of Object.entries(cases)){
	if( value() ){
		console.log(`${key}: success`);
	}else{
		throw new Error(`${key}: failed`);
	}
}
