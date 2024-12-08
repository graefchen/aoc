\b t

a: 0: "6.txt.test"
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

"Part One..."
41=+/,/move[a;g[a]]=1
4559=+/,/move[b;g[b]]=1

rotation: ("   up";"right";" down";" left")

"Part Two"

again: {[m;p]
/ rotation
	r: 0
/ n-matrix
	n: (^m)#0
/ wall-matrix
	w: (^m)#0
	d: (n;n;n;n)
/ main loop, moving while we aren't out of bounds
	while[(~oob[m;p+(dx@r)]);
/ checking if a wall is in front of us
		is:pos[m;p+(dx@r)]=2
/ rotation because there is a wall
		if[is;t:p+(dx@r);d[r;t@0;t@1]:2;r:((r+1)!4)]
		t:p+dx@r
		if[0=r;q: (        p@1) _ d[1;p@0;   ];b:q?2;if[b>0;if[q[b-1];w[t@0;t@1]:1]]]
		if[1=r;q: (        p@0) _ d[2;   ;p@1];b:q?2;if[b>0;if[q[b-1];w[t@0;t@1]:1]]]
		if[2=r;q:|(-(1+#m)-p@1) _ d[3;p@0;   ];b:q?2;if[b>0;if[q[b-1];w[t@0;t@1]:1]]]
		if[3=r;q:|(-(1+#m)-p@0) _ d[0;   ;p@1];b:q?2;if[b>0;if[q[b-1];w[t@0;t@1]:1]]]
		d[r;t@0;t@1]:1
		p: p+dx@r
	]
	w}

m: move[a;g[a]]
n: again[m;g[a]]
+/,/n

m: move[b;g[b]]
n: again[m;g[b]]
+/,/n

\\
