# type-check
[honeo/type-check](https://github.com/honeo/type-check)    
[@honeo/type-check](https://www.npmjs.com/package/@honeo/type-check)

## なにこれ
型・インスタンス等をチェックするやつ。  
Polyfill前提。

## 使い方
```sh
$ npm i -S @honeo/type-check
```
```js
import is from '@honeo/type-check';

is.num();
> false

is.arr([]);
> true

is.str('hoge', 'fuga');
> true
```

## API
### array(), arr()
```js
is.array([]);
> true

is.arr([], []);
> true
```

### boolean(), bool()
```js
is.boolean(false);
> true

is.bool(true, false);
> true
```

### function(), func()
```js
is.function(function(){});
> true

is.func(_=>_, _=>_);
> true
```

### number(), num()
```js
is.number(1);
> true

is.num(0, 1);
> true
```

### regexp(), re()
```js
is.regexp(/hoge/);
> true

is.re(/foo/, /bar/);
> true
```

### string(), str()
```js
is.string('hoge');
> true

is.str('fuga', 'piyo');
> true
```

## object(), obj()
```js
is.object({});
> true

is.obj({}, {});
> true

is.obj(null);
> false
```

## promise()
```js
is.promise(new Promise(_=>_));
> true
```

## node()
```js
is.node(document.createElement('a'), document.createTextNode('hoge'));
> true
```

## textnode()
```js
is.textnode(document.createTextNode('hoge'));
> true
```

## element()
```js
is.element(document.head, document.body);
> true
```

## documentfragment(), df()
```js
is.df(document.createDocumentFragment());
> true
```

## true()
```js
is.true(true, !0);
> true
```

## false()
```js
is.false(false !1);
> true
```

## truthy()
```js
is.truthy(true, "hoge", 1, [], {});
> true
```

## falsy()
```js
is.falsy(null, undefined, "", 0, NaN);
> true
```

## arraylike()
```js
is.arraylike([], 'hoge');
> true
```
