
function contract(fn, ...types) {
    return function(...args) {
        types.slice(0, -1).forEach((type, index) => {
            if (typeof args[index] !== type) {
                throw new TypeError(`Argument at position ${index + 1} must be of type ${type}`);
            }
        });
        const result = fn(...args);

        const resultType = types[types.length - 1];
        if (typeof result !== resultType) {
            throw new TypeError(`Return value must be of type ${resultType}`);
        }

        return result;
    };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, 'number', 'number', 'number');
const res = addNumbers(2, 3);
console.dir(res); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, 'string', 'string', 'string');
const resultConcat = concatStrings('Hello ', 'world!');
console.dir(resultConcat);
