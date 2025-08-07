f = io.open("1.txt", "r")
input = f:read("*a")
f:close()

local num = 0
local fst = nil

for i = 1, #input do
    c = input:sub(i, i)
    num = num + (c == "(" and 1 or -1)
    if (fst == nil and num == -1) then
        fst = i
    end
end

print(num)
print(fst)
