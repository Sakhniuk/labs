function inc(n) {
    return n + 1;
}
const a = 5;
const b = inc(a);
console.dir({ a, b }); 

function incObj(num) {
    if (num && typeof num.n === 'number') {
        num.n += 1;
    }
}
const obj = { n: 5 };
incObj(obj);
console.dir(obj); 