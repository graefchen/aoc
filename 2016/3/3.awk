BEGIN {
	linenum = 0
	number1 = 0
	number2 = 0
}

{
	a[1] = $1 + 0; a[2] = $2 + 0; a[3] = $3 + 0;
	asort(a)
	if ((a[1] + a[2]) > a[3])
		number1 += 1
	linenum += 1
	arr[1][linenum] = $1 + 0; arr[2][linenum] = $2 + 0; arr[3][linenum] = $3 + 0;
	if (linenum == 3) {
		linenum = 0
		for (idx in arr) {
			asort(arr[idx])
			if ((arr[idx][1] + arr[idx][2]) > arr[idx][3])
				number2 += 1
		}
	}
}

END {
	print number1
	print number2
}
