function solution(players, callings) {
  const indexMap = new Map(); // 선수 이름 → 현재 등수 인덱스

  // 초기 등수 저장
  players.forEach((name, idx) => {
    indexMap.set(name, idx);
  });

  // 추월 처리
  for (let name of callings) {
    const idx = indexMap.get(name);
    const prevPlayer = players[idx - 1];

    // 위치 교환
    [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

    // 인덱스 갱신
    indexMap.set(name, idx - 1);
    indexMap.set(prevPlayer, idx);
  }

  return players;
}
