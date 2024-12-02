# functions

Notes about functions in _k_

Functions are fairly easy, but a little bit tricky, the will return the value
of the last _line_,

So the _k_ function:

```k
foo: {[a;b] a+b}
```

will return the value of it's two argumenst `a` and `b`.

Because _k_ is terse, the alternative way to writing this function could be:

```k
foo: {x+y}
```
