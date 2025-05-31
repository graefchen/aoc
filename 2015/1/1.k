a: * 0:"1.txt"

/ first part
f: {[s] +/(s="(")+-(s=")")}
f[a]

/ second part
/ adding 0 in front of the list to fix
/ the lenght (and the one char input)
g: {[s] (+\(0,s="(")+-(0,s=")"))?-1}
g[a]

/ exit repl
\\
