function longest<T extends { length: number }>(a: T, b: T) {
    return a.length >= b.length ? a : b;
}

console.log('longest("apple", "banana") => ', longest("apple", "banana"));
console.log('longest([2],[3,4]) => ', longest([2], [3, 4]));
// console.log('longest(2,3) => ', longest(2, 3)); // compile time error