const input = (await Deno.readTextFile("./17.txt"))
  .split("\r\n")
  .map((s) => parseInt(s));

// working with a tree, returning when under 0, exacly 150 or used all buckets
// reference: https://www.reddit.com/r/adventofcode/comments/3x6cyr/comment/cy22zeu/
// and the recursive fibonacci
function count(total, n, bucket_num = 0) {
  if (n < 0) return 0;
  else if (total === 0) return 1;
  else if (bucket_num === input.length || total < 0) return 0;
  else
    return (
      count(total, n, bucket_num + 1) +
      count(total - input[bucket_num], n - 1, bucket_num + 1)
    );
}

let i = 1,
  result;
// from 1 up to amount that return not 0
while (!result) result = count(150, i++);

// Part 1 & 2
console.log(count(150, input.length));
console.log(result);
