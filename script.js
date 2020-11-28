let value = 0;

const input = document.querySelector(".prime-input");
input.addEventListener("keydown", () => {
  console.log(+input.value);
  value = +input.value;
});
console.dir(input);

function isPrime(x) {
  if (x == NaN || x <= 1) {
    return false;
  }
  for (const i of [...Array(x).keys()].slice(2)) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

const button = document.querySelector(".prime-search-button");
button.addEventListener("click", () => {
  console.log(value);
  console.log(isPrime(value));
});

console.dir(button);
