const hoge = {
  name: "yawarakacream",
  age: 18,
  birthday: new Date(2001, 12, 15),
  udon: "attakai",
};

hoge.name = "...";
// console.log(hoge.name);

const huga = [0, 1, 2];
huga[1] = -9;
// console.log(huga);

/*
console.log("2" ** 4);
console.log("2" + 4);
console.log("2" - 4);
console.log([6] + 5);
console.log([9] == false);
*/

function f(a, b, c) {
  return a + b + c;
}
//console.log(f(1, 2, 3));

const g = (x) => x.name;
//console.log(g(hoge));

function fa(x) {
  ans = 1;
  for (const i of Array(x).keys()) {
    ans *= i + 1;
  }
  return ans;
}

function fa2(x) {
  return [...Array(x).keys()].reduce((a, i) => a * (i + 1), 1);
}
//console.log(fa2(1));

function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (const i of [...Array(x).keys()].slice(2)) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
