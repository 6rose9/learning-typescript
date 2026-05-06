function liveDangerously(x?: number) {
    console.log(x?.toFixed() || x);
}

liveDangerously();
liveDangerously(15);
// liveDangerously("hello");