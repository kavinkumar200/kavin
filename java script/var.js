function example() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x);  // 10
    }
    console.log(y);  // 20 (var is function-scoped, not block-scoped)
}
console.log(example());  