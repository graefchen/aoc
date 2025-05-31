\b t

b: 0: "6.txt"

c:("#.";"^.")
p: 0 0

dx: (-1 0;0 1; 1 0;0 -1) / deltas
oob: {(|/y<0)||/y>(^x)-1} / out of bounds
g: {
	n: x="^"
	row:((,/n)?1)!#n
	col:(((,/n)?1)-row)%#n
	(col,row)}

pos: {(x@y@0)@y@1}

move: {[m;p]
	r: 0 
	n: (^m)#0
	n[p@0;p@1]:1
	while[(~oob[m;p+(dx@r)]);
		is: pos[m;p+(dx@r)]="#"
		if[is;
			t: p+(dx@r)
			n[t@0;t@1]:2
			r: ((r+1)!4)
		]
		if[~is; p: p+(dx@r)]
		n[p@0;p@1]:1
	]
	n}

+/,/move[b;g[b]]=1

\\
