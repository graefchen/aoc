import "io" for File

var input = File.read("1.txt")

var num = 0
var fst = 0
var p   = 0

for (i in input) {
	num = num + (i == "("?1:-1)
	p = p + 1
	if (fst == 0 && num == -1) {
		fst = p
	}
}

System.print(num)
System.print(fst)
