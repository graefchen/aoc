a: * 0:"1.txt"

/ first part
f: {[s] +/(s="(")+-(s=")")}
`0:"--- Part One ---\n"
`0:"tests:\n"
`0:"0=false;1=true\n"
0=f["(())"]
0=f["()()"]
3=f["((("]
3=f["(()(()("]
3=f["))((((("]
-1=f["())"]
-1=f["))("]
-3=f[")))"]
-3=f[")())())"]
`0:"puzzle:\n"
f[a]

/ second part
/ plus one cause index 0 vs 1
g: {[s] 1+(+\(s="(")+-(s=")"))?-1}
`0:"--- Part Two ---\n"
`0:"tests:\n"
`0:"0=false;1=true\n"
/ domain error: 1=g[")"]
5=g["()())"]
`0:"puzzle:\n"
g[a]

/ exit repl
\\
