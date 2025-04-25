function solution(spell, dic) {
  // spell을 정렬해서 문자열로 만듦 (비교를 위해)
  const sortedSpell = spell.sort().join("");

  for (let word of dic) {
    // 단어를 배열로 나눈 뒤 정렬해서 문자열로 만들고 비교
    if (word.length === spell.length) {
      const sortedWord = word.split("").sort().join("");
      if (sortedWord === sortedSpell) {
        return 1;
      }
    }
  }

  return 2;
}
