file := File with("4.txt")
input := file contents

md5 := method(str,
	digest := MD5 clone
	digest appendSeq(str)
	return digest md5String
)

// Part 1
i := 0
loop(
	in := List clone append(input, i) join("")
	hash := md5(in)
	if (hash exSlice(0,4) containsSeq("00000")) then (break)
	i = i + 1
)

i println

// Part 2
i := 0
loop(
	in := List clone append(input, i) join("")
	hash := md5(in)
	if (hash exSlice(0,5) containsSeq("000000")) then (break)
	i = i + 1
)

i println

exit
