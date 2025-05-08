/**
 * @param {number} n        // 벽 길이 (1 ≤ m ≤ n ≤ 100 000) — 사실 로직에 직접 쓰이진 않음
 * @param {number} m        // 롤러 길이
 * @param {number[]} section// 다시 칠해야 하는 구역 번호 (오름차순, 중복 없음)
 * @returns {number}        // 최소 칠 횟수
 */
function solution(n, m, section) {
  let answer = 0;
  let i = 0;                 // section 배열 탐색 포인터

  while (i < section.length) {
    answer++;                // 이번에 한 번 칠함
    const coverEnd = section[i] + m - 1; // 이번 칠로 덮이는 마지막 구역
    // coverEnd 안에 포함되는 구역들은 모두 건너뛴다
    while (i < section.length && section[i] <= coverEnd) i++;
  }

  return answer;
}