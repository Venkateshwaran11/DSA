function findAnagram(s, t) {
    const count = new Map();
    let returnval = true
    if (s.length !== t.length) {
        return false;
    }
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    for (let char of t){
       if (!count.has(char) || count.get(char) === 0) {
            return false;
        }
        count.set(char,(count.get(char)||0)-1)

    }
    return returnval
}

console.log(findAnagram("aabb","baba"))