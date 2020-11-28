
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
  const input = document.querySelector(".prime-input");
  const result = document.querySelector(".prime-result");
  result.innerHTML = isPrime(+input.value) ? "素数" : "素数ではない";
});
