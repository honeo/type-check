console.log('type-check: test');

// jsdom + var
const JSDOM = require('jsdom');
global.document = JSDOM.jsdom('hogehoge');
global.head = document.head;
global.window = document.defaultView;
global.Node = window.Node;

// modules
const is = require('../').default;

// Cases
const caseArray = [];



/// type

// array, arr
caseArray.push( (arg)=>{
	return is.array([])
		&& is.arr([])
		&& is.arr([], [])
		&& !is.arr('array!')
		&& !is.arr([], true);
});

// boolean, bool
caseArray.push( (arg)=>{
	return is.boolean(true)
		&& is.bool(false)
		&& is.bool(true, false)
		&& !is.bool('boolean!')
		&& !is.bool(true, 'true');
});

// function, func
caseArray.push( (arg)=>{
	const f = function(){};
	return is.function(f)
		&& is.func(f)
		&& is.func(f, f)
		&& !is.func('function!')
		&& !is.func(f, true);
});

// number, num
caseArray.push( (arg)=>{
	return is.number(123)
		&& is.num(45)
		&& is.num(22, 80, 443)
		&& !is.num('number!')
		&& !is.num(1, true);
});

// regexp, re
caseArray.push( (arg)=>{
	const r = /hoge/;
	return is.regexp(r)
		&& is.re(r)
		&& is.re(r, r)
		&& !is.re('rexexp!')
		&& !is.re(r, true);
});

// string, str
caseArray.push( (arg)=>{
	return is.string('hoge')
		&& is.str('fuga')
		&& is.str('foo', 'bar')
		&& !is.str(123)
		&& !is.str('piyo', true);
});



/// instance

// object, obj
caseArray.push( (arg)=>{
	return is.object({})
		&& is.obj({})
		&& is.obj({}, {})
		&& !is.obj('object!')
		&& !is.obj({}, true);
});

// promise
caseArray.push( (arg)=>{
	const p = new Promise(_=>_);
	return is.promise(p)
		&& is.promise(p, p)
		&& !is.promise('promise!')
		&& !is.promise(p, true);
});



/// DOM
const textnode = document.createTextNode('');
const element = document.createElement('div');

// node
caseArray.push( (arg)=>{
	return is.node(textnode)
		&& is.node(element)
		&& is.node(textnode, element)
		&& !is.node('node!')
		&& !is.node(textnode, true);
});

// textnode
caseArray.push( (arg)=>{
	return is.textnode(textnode)
		&& is.textnode(textnode, textnode)
		&& !is.textnode('textnode!')
		&& !is.textnode(textnode, true);
});

// element
caseArray.push( (arg)=>{
	return is.element(element)
		&& is.element(element, element)
		&& !is.element('element!')
		&& !is.element(element, true);
});

// documentfragment, df
caseArray.push( (arg)=>{
	const df = document.createDocumentFragment();
	return is.documentfragment(df)
		&& is.df(df)
		&& is.df(df, df)
		&& !is.df('documentfragment!')
		&& !is.df(df, true);
});



/// Other

// true
caseArray.push( (arg)=>{
	return is.true(true)
		&& is.true(true, true)
		&& !is.true('true!')
		&& !is.true(true, false);
});

// false
caseArray.push( (arg)=>{
	return is.false(false)
		&& is.false(false, false)
		&& !is.false('false!')
		&& !is.false(false, true);
});



// 本体
caseArray.forEach( (func, index, array)=>{
	if( func() ){
		console.log(`${index+1}/${array.length}: success`)
	}else{
		throw new Error(`${index}/${array.length}: failed`)
	}
});
