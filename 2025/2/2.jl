file = open("2.txt", "r")
input = read(file, String)
input = split(input, ",")
inputCopy = input
close(file)

ids = Vector{Int128}(undef, 0)

function check(n)
    nStr = string(n)
    nSize = length(nStr)
    if (isodd(nSize))
        return false
    end

    num = trunc(Int128, nSize / 2)
    u = nStr[1:num]
    l = nStr[num+1:end]
    # println(u, "|", l)
    return (u == l)
end

for sub in input
    rng = split(sub, "-")
    from = parse(Int128, rng[1])
    to = parse(Int128, rng[2])
    r = range(from, to)
    for id in r
        if check(id)
            append!(ids, id)
        end
    end
end

println(sum(ids))

# Part 2 coppied and adapted from:
# https://github.com/JoanaBLate/advent-of-code-js/blob/1f6e53f4f9deb050ec238b6156e6ca1e1ecc5154/2025/day02-solve2.js

ids2 = Vector{Int128}(undef, 0)

function checkToken(token, tokenSize, length)
    if (tokenSize == length)
        return false
    end

    if (tokenSize % length != 0)
        return false
    end

    pattern = token[1:length]
    cursor = Int64(1)

    while (true)
        cursor = cursor + length

        # println("cursor: ", cursor, " ; tokenSize: ", tokenSize)

        if (cursor > tokenSize)
            return true
        end

        target = token[cursor:cursor+length-1]

        # println("comparing from \"", token, "\": \"", pattern, "\" and \"", target, "\"")

        if (pattern != target)
            break
        end
    end

    return false
end

for sub in inputCopy
    rng = split(sub, "-")
    from = parse(Int128, rng[1])
    to = parse(Int128, rng[2])
    r = range(from, to)
    for id in r
        str = string(id)
        len = length(str)
        # println("str: ", str, " ; len: ", len)
        if checkToken(str, len, 1)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 2)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 3)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 4)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 5)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 6)
            append!(ids2, id)
            continue
        end
        if checkToken(str, len, 7)
            append!(ids2, id)
            continue
        end
    end
end

# println(ids2)
println(sum(ids2))
