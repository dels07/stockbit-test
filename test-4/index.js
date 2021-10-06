function findAnagram(strings) {
  const anagrams = {};

  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];
    let chars = str.split('').sort();

    anagrams[chars] ? anagrams[chars].push(str) : anagrams[chars] = [str];
  }

  return Object.values(anagrams);
}

const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const results = findAnagram(strings);

console.log(results);