'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
//n番目のフィボナッチ数を出力する fib 関数
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
//40番目まで出力するやつ