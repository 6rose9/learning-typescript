function liveDangerously(x) {
    console.log((x === null || x === void 0 ? void 0 : x.toFixed()) || x);
}
liveDangerously();
liveDangerously(15);
// liveDangerously("hello");
