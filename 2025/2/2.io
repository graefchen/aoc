// NOTE: Impossible to get working as we need Int64 and IO uses Float64
file := File with("test.txt")
constrains := file contents split(",")
idList := List clone

countDigit := method(n, return (n asString size))

checkEqual := method(n,
	nString := n asString
	nSize := nString size
	if(nSize isOdd, return false)

	upper := nString exSlice(0, nSize / 2)
	lower := nString exSlice(- (nSize / 2))
	// write("num: ", n, " nSize: ", nSize, " upper: ", upper, " lower: ", lower, "\n")
	return (if(lower == upper, true, false))
)

for(i, 0, constrains size - 1,
	range := constrains at(i) split("-")
	range_from := range first asNumber
	range_to := range last asNumber
	for(num, range_from, range_to,
		// write("num: ", num, " equal: ", checkEqual(num), "\n")
		if (checkEqual(num), idList append(num))
	)
)

idList asJson println
idList sum println

// to low:    2872968599
// should be: 9188031749

exit
