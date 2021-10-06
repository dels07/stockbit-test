function findFirstStringInBracket(str) {
  if (!str.length) return '';

  const indexFirstBracketFound = str.indexOf("(");

  if (indexFirstBracketFound < 0) return '';

  let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

  if (!wordsAfterFirstBracket) return '';

  wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
  const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

  return indexClosingBracketFound >= 0
    ? wordsAfterFirstBracket.substring(0, indexClosingBracketFound)
    : '';
}

// add simple assertions
const result1 = findFirstStringInBracket("");
const result2 = findFirstStringInBracket("foobar");
const result3 = findFirstStringInBracket("(foo)bar");
const result4 = findFirstStringInBracket("foo(bar)");
const result5 = findFirstStringInBracket("(foo)(bar)");

console.log(result1 === '' ? 'passed' : 'failed');
console.log(result2 === '' ? 'passed' : 'failed');
console.log(result3 === 'foo' ? 'passed' : 'failed');
console.log(result4 === 'bar' ? 'passed' : 'failed');
console.log(result5 === 'foo' ? 'passed' : 'failed');
