file := File with("1.txt")
input := file contents split("\r\n")
answ1 := 0
answ2 := 0
num := 50

abs := method(num, if (num < 0, return -num, return num))

add := method(original, adder,
	new := original
	multi := if (adder > 0, -1, 1)
	for(i, 1, abs(adder),
		new = new + (1 * multi)
		if (new == 100) then ( new = 0)
		if (new == 0) then (answ2 = answ2 + 1 )
		if (new == -1) then ( new = 99)
	)
	return new
)

for(i, 0, input size - 1,
	str := input at(i)
	number := (str exSlice(1, str size)) asNumber
	// 76 = L, 82 = R
	num = if(str at(0) == 76, add(num, -number), add(num, number))
	if(num == 0, answ1 = answ1 + 1)
)

answ1 println
// 6595 is too low (how?)
// 6599 is correct
// 9842 is tii high
answ2 println

exit
