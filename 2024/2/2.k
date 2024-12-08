a: 0: "2.txt.test"
b: 0: "2.txt"
parse: {{0$'(&1,x=" ") _ x}'x}

/ part one
`0:"--- Part One ---\n"
f: {({(0=*x)&1=#x}'{?x}'{{(x>3)|x=0}'x}'{_abs x-y}':'x)&{1=#x}'{?x}'{{x= _abs x}x-y}':'x}
`0:"tests:\n"
`0:"0=false;1=true\n"
2=+/f parse a

`0:"puzzle:\n"

+/f parse b

/ part two
`0:"--- Part Two ---\n"
imm: {x@{&x}'~{a=/:a:!x}#:x}

`0:"tests:\n"
`0:"0=false;1=true\n"
4=+/|/'f'imm'parse a
`0:"puzzle:\n"
t: |/'f'imm'parse b
+/t

/ close repl
\\

