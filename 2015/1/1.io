file := File with("1.txt")
input := file contents
num := 0
i := 0
fst := 0
fnd := false
for(i, 0, input size - 1,
	num = num + if (input at(i) == 40, 1, -1)
	if (fnd != true) then(if (num == -1) then (
		fst = i + 1
		fnd = true
	))
)
num println
fst println