a: 0: "1.txt.test"
b: 0: "1.txt"

/ part one
`0:"--- Part One ---\n"
`0:"tests:\n"
`0:"0=false;1=true\n"
f: {+/{_abs (x@0)-(x@1)}'+{x[<x]}'+{i:x?" ";(0$0_(i)#x),0$(i)_(#x)#x}'+?+x}
11=f[a]
`0:"puzzle:\n"
f[b]
/ part two
`0:"--- Part Two ---\n"
g: {a:+{i:x?" ";(0$0_(i)#x),0$(i)_(#x)#x}'+?+x;+/(a@1)*+/{(x@0)=a@1}'+a}
`0:"tests:\n"
`0:"0=false;1=true\n"
31=g[a]
`0:"puzzle:\n"
g[b]

/ close repl
\\
