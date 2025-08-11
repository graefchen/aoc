import "io" for File

var input = File.read("2.txt").split("\r\n").map {|e| e.split("x").map {|n| Num.fromString(n)}.toList }.toList

var paper = input.map {|e|
	var lw = e[0] * e[1]
	var wh = e[1] * e[2]
	var hl = e[0] * e[2]
	return 2 * (lw + wh + hl) + lw.min(wh.min(hl))
}.toList.reduce{|a,b| a + b }

System.print(paper)

var ribon = input.map {|e|
	var m = e.sort()
	return m[0] + m[0] + m[1] + m[1] + e[0] * e[1] * e[2]
}.toList.reduce{|a,b| a + b}

System.print(ribon)
