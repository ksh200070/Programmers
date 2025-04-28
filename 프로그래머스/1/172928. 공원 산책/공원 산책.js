function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let x = 0, y = 0;

  // 시작 위치 찾기
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === 'S') {
        x = i;
        y = j;
        break;
      }
    }
  }

  // 방향 설정
  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (const route of routes) {
    const [dir, distStr] = route.split(' ');
    const dist = Number(distStr);

    const [dx, dy] = directions[dir];
    let nx = x;
    let ny = y;
    let canMove = true;

    for (let i = 0; i < dist; i++) {
      nx += dx;
      ny += dy;

      // 공원을 벗어나는지 확인
      if (nx < 0 || nx >= H || ny < 0 || ny >= W) {
        canMove = false;
        break;
      }

      // 장애물을 만나는지 확인
      if (park[nx][ny] === 'X') {
        canMove = false;
        break;
      }
    }

    // 이동 가능하면 실제 이동
    if (canMove) {
      x = nx;
      y = ny;
    }
  }

  return [x, y];
}
