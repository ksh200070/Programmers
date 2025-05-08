/**
 * @param {string} s  // 1 ≤ s.length ≤ 10 000, 소문자만
 * @returns {number}  // 분해해서 얻은 문자열의 개수
 */
function solution(s) {
  let answer = 0;         // 잘라 낸 문자열 개수
  let same = 0, diff = 0; // 현재 조각에서 x·개수, x가 아닌 개수
  let x = '';             // 현재 조각의 첫 글자

  for (let i = 0; i < s.length; i++) {
    // 새 조각을 시작하는 순간
    if (same === 0 && diff === 0) {
      x = s[i];
      answer++;           // 조각 하나 늘어남
    }

    // 현재 글자를 세어 준다
    if (s[i] === x) same++;
    else            diff++;

    // 두 횟수가 같아지면 다음 글자부터 새 조각 시작
    if (same === diff) {
      same = diff = 0;
    }
  }

  // 끝까지 읽었는데 same ≠ diff 인 상태라면
  // 이미 answer 에 카운트 되어 있으므로 따로 처리할 필요 없음
  return answer;
}
