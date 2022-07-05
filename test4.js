// another sample

function getCommonDenominator(a, b) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  return a * b / gcd(a, b);
}
