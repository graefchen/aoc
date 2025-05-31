file := File with("1.txt")
input := file contents
num := 0
i := 0
fst := nil

for(i, 0, input size - 1,
	num = num + if (input at(i) == 40, 1, -1)
	if (num == -1) then(if (fst == nil) then (
		fst = i + 1
	))
)
num println
fst println