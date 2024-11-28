const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, 42n, Symbol('id')];

const typeCount = {};

for (const item of array) {
    const type = typeof item;
    if (!(type in typeCount)) {
        typeCount[type] = 0;
    }
    typeCount[type]++;
}

console.dir(typeCount);